'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
    const [settings, setSettings] = useState({
        imageUrl: '',
        soundUrl: '',
        fontFamily: 'sans-serif',
        duration: 5000,
        animationType: 'fade',
        bannerUrl: '',
        logoUrl: '',
        siteName: 'S4N Donate',
        enableEcpay: true,
        enableOpay: true,
        messageTemplate: '{name} 贊助了 ${amount}',
        textColor: '#1a1a1a',
        amountColor: '#ff6b6b',
        fontSize: 32,
        messageFontSize: 24,
        themeColor: '#00d1b2',
        animationDuration: 1000,
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        alertWidth: 600,
        alertHeight: 0, // 0 means auto/null
        verticalAlign: 'center',
        horizontalAlign: 'center',
        siteNameAlign: 'center',
        browserTitle: 'S4N Donate',
        slogan: '您的支持是我們最大的動力！',
        sloganAlign: 'center',
    });
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState(Date.now());

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [settingsRes, donationsRes] = await Promise.all([
                fetch('/api/settings'),
                fetch('/api/donations'),
            ]);
            const settingsData = await settingsRes.json();
            const donationsData = await donationsRes.json();

            if (settingsData.id) {
                setSettings({
                    ...settingsData,
                    alertHeight: settingsData.alertHeight || 0
                });
            }
            setDonations(donationsData);
        } catch (error) {
            console.error('Failed to fetch data', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveSettings = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            // Convert 0 to null for DB if needed, or keep as 0 and handle in frontend
            // Prisma Int? allows null. Let's send null if 0 or empty
            const payload = {
                ...settings,
                alertHeight: settings.alertHeight > 0 ? settings.alertHeight : null
            };

            await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            alert('設定已儲存');
            setLastSaved(Date.now());
        } catch (error) {
            alert('儲存失敗');
        } finally {
            setSaving(false);
        }
    };

    const [activeTab, setActiveTab] = useState('basic');

    const handleTestAlert = async () => {
        try {
            await fetch('/api/socket/test', { method: 'POST' });
        } catch (e) {
            alert('測試發送失敗');
        }
    };

    if (loading) return <div className="ts-center"><div className="ts-loading is-large"></div></div>;

    return (
        <div className="ts-container has-vertically-spaced-large">
            <div className="ts-grid is-middle-aligned">
                <div className="column is-fluid">
                    <div className="ts-header is-heavy">S4N Donate System</div>
                    <div className="ts-text is-secondary">串流贊助管理後台</div>
                </div>
                <div className="column">
                    <button
                        className={`ts-button is-primary ${saving ? 'is-loading' : ''}`}
                        onClick={handleSaveSettings}
                    >
                        儲存設定
                    </button>
                </div>
            </div>

            <div className="ts-tab is-fluid has-top-spaced-large">
                <a className={`item ${activeTab === 'basic' ? 'is-active' : ''}`} onClick={() => setActiveTab('basic')}>基本設定</a>
                <a className={`item ${activeTab === 'style' ? 'is-active' : ''}`} onClick={() => setActiveTab('style')}>通知樣式</a>
                <a className={`item ${activeTab === 'layout' ? 'is-active' : ''}`} onClick={() => setActiveTab('layout')}>位置與大小</a>
                <a className={`item ${activeTab === 'preview' ? 'is-active' : ''}`} onClick={() => setActiveTab('preview')}>預覽與測試</a>
            </div>

            <div className="ts-box has-top-spaced">
                <div className="ts-content">
                    {activeTab === 'basic' && (
                        <div className="ts-grid is-stacked">
                            <div className="column">
                                <label className="ts-text is-label">瀏覽器分頁標題 (Browser Tab Title)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.browserTitle || ''}
                                        onChange={(e) => setSettings({ ...settings, browserTitle: e.target.value })}
                                        placeholder="S4N Donate"
                                    />
                                </div>
                                <div className="ts-text is-small is-secondary has-top-spaced-small">顯示於瀏覽器分頁標籤上的標題</div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">實況主名稱 (Streamer Name)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.siteName || ''}
                                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                        placeholder="S4N Donate"
                                    />
                                </div>
                                <div className="ts-text is-small is-secondary has-top-spaced-small">顯示於贊助頁面標題</div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">標語 (Slogan)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.slogan || ''}
                                        onChange={(e) => setSettings({ ...settings, slogan: e.target.value })}
                                        placeholder="您的支持是我們最大的動力！"
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">網站圖示 (Favicon)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.logoUrl || ''}
                                        onChange={(e) => setSettings({ ...settings, logoUrl: e.target.value })}
                                        placeholder="https://example.com/logo.png"
                                    />
                                </div>
                                <div className="ts-text is-small is-secondary has-top-spaced-small">顯示於瀏覽器分頁圖示 (建議使用 .ico 或 .png)</div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">Banner 圖片連結</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.bannerUrl || ''}
                                        onChange={(e) => setSettings({ ...settings, bannerUrl: e.target.value })}
                                        placeholder="https://example.com/banner.png"
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <div className="ts-header is-small is-heavy">金流設定</div>
                                <div className="ts-grid is-2-columns has-top-spaced-small">
                                    <div className="column">
                                        <label className="ts-switch">
                                            <input
                                                type="checkbox"
                                                checked={settings.enableEcpay}
                                                onChange={(e) => setSettings({ ...settings, enableEcpay: e.target.checked })}
                                            />
                                            <span className="label">啟用綠界科技 (ECPay)</span>
                                        </label>
                                    </div>
                                    <div className="column">
                                        <label className="ts-switch">
                                            <input
                                                type="checkbox"
                                                checked={settings.enableOpay}
                                                onChange={(e) => setSettings({ ...settings, enableOpay: e.target.checked })}
                                            />
                                            <span className="label">啟用歐付寶 (O'Pay)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'style' && (
                        <div className="ts-grid is-stacked">
                            <div className="column">
                                <label className="ts-text is-label">通知圖片連結</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.imageUrl}
                                        onChange={(e) => setSettings({ ...settings, imageUrl: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">通知音效連結</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.soundUrl}
                                        onChange={(e) => setSettings({ ...settings, soundUrl: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">字型 (CSS Font Family)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.fontFamily}
                                        onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">文字顏色</label>
                                <div className="ts-grid is-2-columns">
                                    <div className="column">
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="color"
                                                value={settings.textColor || '#1a1a1a'}
                                                onChange={(e) => setSettings({ ...settings, textColor: e.target.value })}
                                            />
                                        </div>
                                        <div className="ts-text is-small is-secondary has-top-spaced-small">主要文字</div>
                                    </div>
                                    <div className="column">
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="color"
                                                value={settings.amountColor || '#ff6b6b'}
                                                onChange={(e) => setSettings({ ...settings, amountColor: e.target.value })}
                                            />
                                        </div>
                                        <div className="ts-text is-small is-secondary has-top-spaced-small">金額強調</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">主要文字大小 (px)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        value={settings.fontSize || 32}
                                        onChange={(e) => setSettings({ ...settings, fontSize: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">留言文字大小 (px)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        value={settings.messageFontSize || 24}
                                        onChange={(e) => setSettings({ ...settings, messageFontSize: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">主體色系 (Theme Color)</label>
                                <div className="ts-grid is-2-columns">
                                    <div className="column is-fluid">
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="text"
                                                value={settings.themeColor || '#00d1b2'}
                                                onChange={(e) => setSettings({ ...settings, themeColor: e.target.value })}
                                                placeholder="#00d1b2"
                                            />
                                        </div>
                                    </div>
                                    <div className="column">
                                        <input
                                            type="color"
                                            value={settings.themeColor || '#00d1b2'}
                                            onChange={(e) => setSettings({ ...settings, themeColor: e.target.value })}
                                            style={{ width: '100%', height: '38px', padding: '0', border: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div className="ts-text is-small is-secondary has-top-spaced-small">影響按鈕、登入畫面及後台的主色調</div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">動畫效果</label>
                                <div className="ts-grid is-2-columns">
                                    <div className="column">
                                        <div className="ts-select is-fluid">
                                            <select
                                                value={settings.animationType || 'fade'}
                                                onChange={(e) => setSettings({ ...settings, animationType: e.target.value })}
                                            >
                                                <option value="fade">淡入淡出 (Fade)</option>
                                                <option value="slide-up">向上滑動 (Slide Up)</option>
                                                <option value="slide-down">向下滑動 (Slide Down)</option>
                                                <option value="zoom">縮放 (Zoom)</option>
                                                <option value="bounce">彈跳 (Bounce)</option>
                                            </select>
                                        </div>
                                        <div className="ts-text is-small is-secondary has-top-spaced-small">類型</div>
                                    </div>
                                    <div className="column">
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="number"
                                                value={settings.animationDuration || 1000}
                                                onChange={(e) => setSettings({ ...settings, animationDuration: Number(e.target.value) })}
                                                placeholder="1000"
                                            />
                                        </div>
                                        <div className="ts-text is-small is-secondary has-top-spaced-small">持續時間 (ms)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">外觀樣式</label>
                                <div className="ts-grid is-2-columns">
                                    <div className="column">
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="color"
                                                value={settings.backgroundColor || '#ffffff'}
                                                onChange={(e) => setSettings({ ...settings, backgroundColor: e.target.value })}
                                            />
                                        </div>
                                        <div className="ts-text is-small is-secondary has-top-spaced-small">背景顏色</div>
                                    </div>
                                    <div className="column">
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="color"
                                                value={settings.borderColor || '#000000'}
                                                onChange={(e) => setSettings({ ...settings, borderColor: e.target.value })}
                                            />
                                        </div>
                                        <div className="ts-text is-small is-secondary has-top-spaced-small">邊框顏色</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">顯示時間 (毫秒)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        value={settings.duration}
                                        onChange={(e) => setSettings({ ...settings, duration: Number(e.target.value) })}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">通知訊息模板</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.messageTemplate || ''}
                                        onChange={(e) => setSettings({ ...settings, messageTemplate: e.target.value })}
                                        placeholder="{name} 贊助了 ${amount}"
                                    />
                                </div>
                                <div className="ts-text is-small is-secondary has-top-spaced-small">
                                    可用變數: <code>{'{name}'}</code> (贊助者), <code>{'{amount}'}</code> (金額)
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'layout' && (
                        <div className="ts-grid is-stacked">
                            <div className="column">
                                <label className="ts-text is-label">通知寬度 (px)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        value={settings.alertWidth || 600}
                                        onChange={(e) => setSettings({ ...settings, alertWidth: Number(e.target.value) })}
                                        placeholder="600"
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">通知高度 (px)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        value={settings.alertHeight || 0}
                                        onChange={(e) => setSettings({ ...settings, alertHeight: Number(e.target.value) })}
                                        placeholder="0 (自動)"
                                    />
                                </div>
                                <div className="ts-text is-small is-secondary has-top-spaced-small">設為 0 代表自動高度</div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">垂直對齊</label>
                                <div className="ts-select is-fluid">
                                    <select
                                        value={settings.verticalAlign || 'center'}
                                        onChange={(e) => setSettings({ ...settings, verticalAlign: e.target.value })}
                                    >
                                        <option value="start">靠上 (Top)</option>
                                        <option value="center">置中 (Center)</option>
                                        <option value="end">靠下 (Bottom)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">水平對齊</label>
                                <div className="ts-select is-fluid">
                                    <select
                                        value={settings.horizontalAlign || 'center'}
                                        onChange={(e) => setSettings({ ...settings, horizontalAlign: e.target.value })}
                                    >
                                        <option value="start">靠左 (Left)</option>
                                        <option value="center">置中 (Center)</option>
                                        <option value="end">靠右 (Right)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'preview' && (
                        <div className="ts-grid is-stacked">
                            <div className="column">
                                <label className="ts-text is-label">OBS Browser Source URL</label>
                                <div className="ts-input is-fluid is-action">
                                    <input
                                        type="text"
                                        readOnly
                                        value={typeof window !== 'undefined' ? `${window.location.origin}/obs` : '/obs'}
                                    />
                                    <button
                                        className="ts-button is-icon"
                                        type="button"
                                        onClick={() => {
                                            const url = typeof window !== 'undefined' ? `${window.location.origin}/obs` : '/obs';
                                            navigator.clipboard.writeText(url);
                                            alert('已複製連結');
                                        }}
                                    >
                                        <span className="ts-icon is-copy-icon"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ts-header is-heavy is-small has-bottom-spaced-small">預覽與測試</div>
                                <div className="ts-box has-top-spaced-small">
                                    <div className="ts-content is-center-aligned is-secondary" style={{ background: '#333', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                                        <iframe
                                            key={lastSaved}
                                            src="/obs"
                                            style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                                            title="OBS Preview"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <button className="ts-button is-fluid is-outlined" onClick={handleTestAlert}>
                                    發送測試通知
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="ts-header is-heavy has-top-spaced-large">最近贊助</div>
            <div className="ts-box has-top-spaced">
                <div className="ts-content is-dense">
                    <div className="ts-grid is-middle-aligned">
                        <div className="column is-fluid">
                            <div className="ts-text is-secondary">顯示最近 10 筆贊助紀錄</div>
                        </div>
                        <div className="column">
                            <button className="ts-button is-small is-icon is-outlined" onClick={fetchData}>
                                <span className="ts-icon is-rotate-right-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ts-divider"></div>
                {donations.length === 0 ? (
                    <div className="ts-content is-center-aligned is-secondary is-padded-large">
                        <div className="ts-icon is-face-sad-tear-icon is-header is-large"></div>
                        <div className="ts-text has-top-spaced">尚無贊助紀錄</div>
                    </div>
                ) : (
                    <table className="ts-table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>時間</th>
                                <th>來源</th>
                                <th>狀態</th>
                                <th>贊助者</th>
                                <th>金額</th>
                                <th>訊息</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation: any) => (
                                <tr key={donation.id}>
                                    <td>{new Date(donation.createdAt).toLocaleString()}</td>
                                    <td>
                                        {donation.paymentMethod === 'ECPAY' && <span className="ts-badge is-info">綠界</span>}
                                        {donation.paymentMethod === 'OPAY' && <span className="ts-badge is-warning">歐付寶</span>}
                                        {!['ECPAY', 'OPAY'].includes(donation.paymentMethod) && <span className="ts-badge">{donation.paymentMethod}</span>}
                                    </td>
                                    <td>
                                        {donation.status === 'SUCCESS' && <span className="ts-badge is-success">成功</span>}
                                        {donation.status === 'PENDING' && <span className="ts-badge is-secondary">待付款</span>}
                                        {donation.status === 'FAILED' && <span className="ts-badge is-negative">失敗</span>}
                                        {!['SUCCESS', 'PENDING', 'FAILED'].includes(donation.status) && <span className="ts-badge">{donation.status}</span>}
                                    </td>
                                    <td>{donation.donorName}</td>
                                    <td>${donation.amount}</td>
                                    <td>{donation.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
