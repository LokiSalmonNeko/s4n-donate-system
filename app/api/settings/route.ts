import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        // 假設只有一個設定檔，取第一個
        const settings = await prisma.alertSettings.findFirst();
        return NextResponse.json(settings || {});
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            imageUrl, soundUrl, fontFamily, duration, animationType,
            textColor, amountColor, fontSize, messageFontSize,
            animationDuration, backgroundColor, borderColor,
            alertWidth, alertHeight, verticalAlign, horizontalAlign,
            bannerUrl, logoUrl, siteName, siteNameAlign, browserTitle, slogan, sloganAlign,
            enableEcpay, enableOpay, messageTemplate
        } = body;

        // 檢查是否已有設定
        const existing = await prisma.alertSettings.findFirst();

        let settings;
        if (existing) {
            settings = await prisma.alertSettings.update({
                where: { id: existing.id },
                data: {
                    imageUrl, soundUrl, fontFamily, duration, animationType,
                    textColor, amountColor, fontSize, messageFontSize,
                    animationDuration, backgroundColor, borderColor,
                    alertWidth, alertHeight, verticalAlign, horizontalAlign,
                    bannerUrl, logoUrl, siteName, siteNameAlign, browserTitle, slogan, sloganAlign,
                    enableEcpay, enableOpay, messageTemplate
                },
            });
        } else {
            settings = await prisma.alertSettings.create({
                data: {
                    imageUrl, soundUrl, fontFamily, duration, animationType,
                    textColor, amountColor, fontSize, messageFontSize,
                    animationDuration, backgroundColor, borderColor,
                    alertWidth, alertHeight, verticalAlign, horizontalAlign,
                    bannerUrl, logoUrl, siteName, siteNameAlign, browserTitle, slogan, sloganAlign,
                    enableEcpay, enableOpay, messageTemplate
                },
            });
        }

        return NextResponse.json(settings);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
