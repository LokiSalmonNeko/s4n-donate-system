'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Settings {
  bannerUrl?: string;
  logoUrl?: string;
  siteName?: string;
  siteNameAlign?: 'left' | 'center' | 'right';
  slogan?: string;
  sloganAlign?: 'left' | 'center' | 'right';
  enableEcpay?: boolean;
  enableOpay?: boolean;
}

export default function HomePage() {
  const [amount, setAmount] = useState(100);
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<Settings>({});
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        setSettingsLoaded(true);
        // Set default payment method based on available options
        if (data.enableEcpay) setPaymentMethod('ECPAY');
        else if (data.enableOpay) setPaymentMethod('OPAY');
      })
      .catch(err => console.error('Failed to load settings:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('請選擇支付方式');
      return;
    }
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

  if (!settingsLoaded) {
    return <div className="ts-center"><div className="ts-loading is-large"></div></div>;
  }

  // Check if any payment method is enabled
  const isAnyPaymentEnabled = settings.enableEcpay !== false || settings.enableOpay !== false;
  // Note: Prisma default is true, so undefined means true usually, but let's handle it carefully.
  // Actually, if the record doesn't exist, it returns empty object.
  // We should assume true if undefined for backward compatibility or false?
  // The schema default is true. So if new record created, it's true.
  // But if we fetch empty object (no record yet), we should probably show defaults.
  const enableEcpay = settings.enableEcpay ?? true;
  const enableOpay = settings.enableOpay ?? true;

  if (!enableEcpay && !enableOpay) {
    return (
      <div className="ts-container is-narrow is-center-aligned" style={{ marginTop: '20vh' }}>
        <div className="ts-header is-icon is-heavy is-big">
          <span className="ts-icon is-circle-exclamation-icon"></span>
          目前不開放贊助
        </div>
        <div className="ts-text is-secondary">實況主暫時關閉了所有贊助管道。</div>
      </div>
    );
  }



  return (
    <div>
      <div className="ts-container is-narrow has-top-spaced-large">
        {/* Streamer Name & Slogan (Outside Box) */}
        <div style={{ marginBottom: '1.5rem', textAlign: settings.siteNameAlign || 'center' }}>
          <div className="ts-header is-heavy is-big">{settings.siteName || 'S4N Donate'}</div>
        </div>
        <div style={{ marginBottom: '2rem', textAlign: settings.sloganAlign || 'center' }}>
          <div className="ts-text is-secondary">{settings.slogan || '您的支持是我們最大的動力！'}</div>
        </div>

        <div className="ts-box">
          {/* Banner */}
          {settings.bannerUrl && (
            <div className="ts-image is-fluid">
              <img
                src={settings.bannerUrl}
                alt="Banner"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

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
                    {enableEcpay && (
                      <div className="column">
                        <button
                          type="button"
                          className={`ts-button is-fluid ${paymentMethod === 'ECPAY' ? 'is-primary' : 'is-outlined'}`}
                          onClick={() => setPaymentMethod('ECPAY')}
                        >
                          綠界科技 (ECPay)
                        </button>
                      </div>
                    )}
                    {enableOpay && (
                      <div className="column">
                        <button
                          type="button"
                          className={`ts-button is-fluid ${paymentMethod === 'OPAY' ? 'is-primary' : 'is-outlined'}`}
                          onClick={() => setPaymentMethod('OPAY')}
                        >
                          歐付寶 (O'Pay)
                        </button>
                      </div>
                    )}
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
    </div>
  );
}
