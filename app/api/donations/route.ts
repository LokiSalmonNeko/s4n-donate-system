import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateCheckMacValue } from '@/lib/payment';

export async function GET() {
    try {
        const donations = await prisma.donation.findMany({
            orderBy: { createdAt: 'desc' },
            take: 20,
        });
        return NextResponse.json(donations);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, message, donorName, paymentMethod } = body;

        if (!amount || !donorName || !paymentMethod) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 建立贊助紀錄
        const donation = await prisma.donation.create({
            data: {
                amount: parseInt(amount),
                message,
                donorName,
                paymentMethod,
                status: 'PENDING',
            },
        });


        // 準備支付參數
        const merchantTradeDate = new Date().toLocaleString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).replace(/\//g, '/');

        // Generate MerchantTradeNo (20 chars max)
        // Use a combination of timestamp and random string or part of UUID
        // Since we need to find the donation by this ID later, we should save it.
        // Let's use the donation ID's first 13 chars + random or just truncate UUID if it's unique enough?
        // UUID is 36 chars. 
        // Let's use: "SN" + timestamp(10) + random(8) ? No, max 20.
        // Let's use: donation.id (UUID) without dashes is 32 chars. Too long.
        // Let's use: timestamp (yyMMddHHmmss) 12 chars + 8 random chars.
        // Or just use the one generated in the original code: donation.id.replace(/-/g, '').substring(0, 20)
        // But we need to save THIS value to the DB to find it later since we can't pass CustomField1.

        const merchantTradeNo = donation.id.replace(/-/g, '').substring(0, 20);

        // Update donation with the generated MerchantTradeNo as paymentId (temporarily, until we get the real TradeNo from OPay/ECPay)
        // Actually, for OPay we will use this to look it up.
        await prisma.donation.update({
            where: { id: donation.id },
            data: { paymentId: merchantTradeNo }
        });

        let actionUrl: string;
        let paymentParams: any;

        if (paymentMethod === 'ECPAY') {
            // ECPay 綠界科技
            const baseParams = {
                MerchantID: process.env.ECPAY_MERCHANT_ID || '3002599',
                MerchantTradeNo: merchantTradeNo,
                MerchantTradeDate: merchantTradeDate,
                PaymentType: 'aio',
                TotalAmount: donation.amount,
                TradeDesc: 'Streamer Donation',
                ItemName: `Donation from ${donorName}`,
                ReturnURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/ecpay/callback`,
                ChoosePayment: 'ALL',
                EncryptType: 1,
                CustomField1: donation.id, // ECPay supports CustomField1, keeping it.
            };

            const checkMacValue = generateCheckMacValue(
                baseParams,
                process.env.ECPAY_HASH_KEY || 'spPjZn66i0OhqJsQ',
                process.env.ECPAY_HASH_IV || 'hT5OJckN45isQTTs'
            );

            paymentParams = { ...baseParams, CheckMacValue: checkMacValue };
            actionUrl = 'https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5'; // 正式環境

        } else if (paymentMethod === 'OPAY') {
            // O'Pay 歐付寶
            const baseParams = {
                MerchantID: process.env.OPAY_MERCHANT_ID || '3002599',
                MerchantTradeNo: merchantTradeNo,
                MerchantTradeDate: merchantTradeDate,
                PaymentType: 'aio',
                TotalAmount: donation.amount,
                TradeDesc: 'Streamer Donation',
                ItemName: `Donation from ${donorName}`,
                ReturnURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/opay/callback`,
                ChoosePayment: 'ALL',
                EncryptType: 1,
                // CustomField1 removed as it causes "Parameter Error"
            };

            const checkMacValue = generateCheckMacValue(
                baseParams,
                process.env.OPAY_HASH_KEY || 'spPjZn66i0OhqJsQ',
                process.env.OPAY_HASH_IV || 'hT5OJckN45isQTTs'
            );

            paymentParams = { ...baseParams, CheckMacValue: checkMacValue };
            actionUrl = 'https://payment.opay.tw/Cashier/AioCheckOut/V5'; // 正式環境

        } else {
            return NextResponse.json({ error: 'Invalid payment method' }, { status: 400 });
        }

        return NextResponse.json({
            donationId: donation.id,
            paymentParams,
            actionUrl,
        });

    } catch (error) {
        console.error('Donation creation error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
