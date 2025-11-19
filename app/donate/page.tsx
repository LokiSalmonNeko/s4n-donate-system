'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DonationPage() {
    const [amount, setAmount] = useState(100);
    const [donorName, setDonorName] = useState('');
    const [message, setMessage] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('ECPAY');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/donations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, donorName, message, paymentMethod }),
            });

            const data = await res.json();

            if (data.actionUrl && data.paymentParams) {
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = data.actionUrl;

                Object.keys(data.paymentParams).forEach((key) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = data.paymentParams[key];
                    form.appendChild(input);
                });

                document.body.appendChild(form);
                form.submit();
            } else {
                alert('發生錯誤，請稍後再試');
            }
        } catch (error) {
            console.error(error);
            alert('發生錯誤，請稍後再試');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ts-container is-narrow has-top-spaced-large">
            <div className="ts-box">
                <div className="ts-content is-center-aligned">
                    <div className="ts-header is-heavy">支持實況主</div>
                    <div className="ts-text is-secondary">您的支持是我們最大的動力！</div>
                </div>

                <div className="ts-divider"></div>

                <div className="ts-content">
                    <form onSubmit={handleSubmit}>
                        <div className="ts-grid is-stacked">
                            <div className="column">
                                <label className="ts-text is-label">您的暱稱</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        required
                                        value={donorName}
                                        onChange={(e) => setDonorName(e.target.value)}
                                        placeholder="請輸入暱稱"
                                    />
                                </div>
                            </div>

                            <div className="column">
                                <label className="ts-text is-label">贊助金額 (TWD)</label>
                                <div className="ts-wrap is-compact has-bottom-spaced-small">
                                    {[100, 300, 500, 1000, 3000, 5000].map((val) => (
                                        <button
                                            key={val}
                                            type="button"
                                            className={`ts-button is-small ${amount === val ? 'is-primary' : 'is-outlined'}`}
                                            onClick={() => setAmount(val)}
                                        >
                                            ${val}
                                        </button>
                                    ))}
                                </div>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        required
                                        min="10"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>
                            </div>

                            <div className="column">
                                <label className="ts-text is-label">留言訊息</label>
                                <div className="ts-input is-fluid is-resizable">
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="想對實況主說的話..."
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <div className="column">
                                <label className="ts-text is-label">支付方式</label>
                                <div className="ts-grid is-2-columns">
                                    <div className="column">
                                        <button
                                            type="button"
                                            className={`ts-button is-fluid ${paymentMethod === 'ECPAY' ? 'is-primary' : 'is-outlined'}`}
                                            onClick={() => setPaymentMethod('ECPAY')}
                                        >
                                            綠界科技 (ECPay)
                                        </button>
                                    </div>
                                    <div className="column">
                                        <button
                                            type="button"
                                            className={`ts-button is-fluid ${paymentMethod === 'OPAY' ? 'is-primary' : 'is-outlined'}`}
                                            onClick={() => setPaymentMethod('OPAY')}
                                        >
                                            歐付寶 (O'Pay)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`ts-button is-fluid is-primary is-large ${loading ? 'is-loading' : ''}`}
                                >
                                    確認贊助
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
