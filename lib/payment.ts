import crypto from 'crypto';

interface PaymentData {
    MerchantID: string;
    MerchantTradeNo: string;
    MerchantTradeDate: string;
    PaymentType: string;
    TotalAmount: number;
    TradeDesc: string;
    ItemName: string;
    ReturnURL: string;
    ChoosePayment: string;
    EncryptType: number;
    [key: string]: any;
}

export function generateCheckMacValue(params: PaymentData, hashKey: string, hashIV: string): string {
    const sortedKeys = Object.keys(params).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    let rawString = sortedKeys
        .map((key) => `${key}=${params[key]}`)
        .join('&');

    rawString = `HashKey=${hashKey}&${rawString}&HashIV=${hashIV}`;

    const encodedString = encodeURIComponent(rawString)
        .replace(/%20/g, '+')
        .toLowerCase();

    return crypto.createHash('sha256').update(encodedString).digest('hex').toUpperCase();
}

export function validateCheckMacValue(params: any, hashKey: string, hashIV: string): boolean {
    const { CheckMacValue, ...rest } = params;
    const calculated = generateCheckMacValue(rest, hashKey, hashIV);
    return CheckMacValue === calculated;
}
