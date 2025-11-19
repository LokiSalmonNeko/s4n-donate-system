import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '../../socket/io';
import { prisma } from '@/lib/prisma';
import { validateCheckMacValue } from '@/lib/payment';

export const config = {
    api: {
        bodyParser: false,
    },
};

const parseForm = (req: NextApiRequest): Promise<any> => {
    return new Promise((resolve, reject) => {
        const chunks: any[] = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', () => {
            const data = Buffer.concat(chunks).toString();
            const params = new URLSearchParams(data);
            const result: any = {};
            params.forEach((value, key) => {
                result[key] = value;
            });
            resolve(result);
        });
        req.on('error', reject);
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const data = await parseForm(req);
        console.log('OPay Callback Data:', data);

        const isValid = validateCheckMacValue(
            data,
            process.env.OPAY_HASH_KEY || '5294y06JbISpM5x9', // O'Pay 測試 Key
            process.env.OPAY_HASH_IV || 'v77hoKGq4kWxNNIS'  // O'Pay 測試 IV
        );

        if (!isValid) {
            console.error('OPay CheckMacValue validation failed');
            return res.status(400).send('0|ErrorMessage');
        }

        const donationId = data.CustomField1;
        const rtnCode = data.RtnCode;

        if (rtnCode === '1' && donationId) {
            const donation = await prisma.donation.update({
                where: { id: donationId },
                data: {
                    status: 'SUCCESS',
                    paymentId: data.TradeNo,
                },
            });

            if (res.socket.server.io) {
                res.socket.server.io.emit('new-donation', donation);
                console.log('Emitted new-donation event (OPay):', donation.id);
            }
        }

        res.status(200).send('1|OK');
    } catch (error) {
        console.error('OPay Callback Error:', error);
        res.status(500).send('0|ErrorMessage');
    }
}
