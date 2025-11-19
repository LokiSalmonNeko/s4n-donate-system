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

        // 準備第三方支付參數 (以 ECPay 為例)
        const merchantTradeDate = new Date().toLocaleString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).replace(/\//g, '/');

        const baseParams = {
            MerchantID: process.env.ECPAY_MERCHANT_ID || '2000132', // 測試用 ID
            MerchantTradeNo: donation.id.replace(/-/g, '').substring(0, 20), // ECPay 限制 20 碼
            MerchantTradeDate: merchantTradeDate,
            PaymentType: 'aio',
            TotalAmount: donation.amount,
            TradeDesc: 'Streamer Donation',
            ItemName: `Donation from ${donorName}`,
            ReturnURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/ecpay/callback`,
            ChoosePayment: 'ALL',
            EncryptType: 1,
            CustomField1: donation.id, // 儲存完整 UUID
        };

        const checkMacValue = generateCheckMacValue(
            baseParams,
            process.env.ECPAY_HASH_KEY || '5294y06JbISpM5x9', // 測試用 Key
            process.env.ECPAY_HASH_IV || 'v77hoKGq4kWxNNIS'  // 測試用 IV
        );

        return NextResponse.json({
            donationId: donation.id,
            paymentParams: { ...baseParams, CheckMacValue: checkMacValue },
            actionUrl: 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5', // 測試環境 URL
        });

    } catch (error) {
        console.error('Donation creation error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
