import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from './io';

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const io = res.socket.server.io;
        if (!io) {
            return res.status(500).json({ error: 'Socket.io not initialized' });
        }

        const testDonation = {
            id: 'test-' + Date.now(),
            donorName: '測試人員',
            amount: 666,
            message: '這是一則測試贊助訊息！This is a test donation message.',
            createdAt: new Date().toISOString(),
        };

        io.emit('new-donation', testDonation);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Test alert error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
