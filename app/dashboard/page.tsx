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
        animationDuration: 1000,
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        alertWidth: 600,
        verticalAlign: 'center',
        horizontalAlign: 'center',
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
                setSettings(settingsData);
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
            await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings),
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
                                <label className="ts-text is-label">網站名稱</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.siteName || ''}
                                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                        placeholder="S4N Donate"
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <label className="ts-text is-label">Logo 圖片連結</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={settings.logoUrl || ''}
                                        onChange={(e) => setSettings({ ...settings, logoUrl: e.target.value })}
                                        placeholder="https://example.com/logo.png"
                                    />
                                </div>
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
                                <label className="ts-text is-label">文字大小 (px)</label>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="number"
                                        value={settings.fontSize || 32}
                                        onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })}
                                    />
                                </div>
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
                                        <div className="ts-list is-separated">
                                            {donations.map((donation: any) => (
                                                <div key={donation.id} className="item">
                                                    <div className="ts-grid is-middle-aligned">
                                                        <div className="column is-fluid">
                                                            <div className="ts-header is-heavy">{donation.donorName}</div>
                                                            <div className="ts-text is-secondary is-small">贊助了 ${donation.amount}</div>
                                                        </div>
                                                        <div className="column">
                                                            <span className={`ts-badge ${donation.status === 'SUCCESS' ? 'is-positive' :
                                                                donation.status === 'PENDING' ? 'is-warning' : 'is-negative'
                                                                }`}>
                                                                {donation.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {donation.message && (
                                                        <div className="ts-quote is-secondary has-top-spaced-small">
                                                            {donation.message}
                                                        </div>
                                                    )}
                                                    <div className="ts-text is-tertiary is-small has-top-spaced-small">
                                                        {new Date(donation.createdAt).toLocaleString('zh-TW')}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                            )}
                                    </div>
                                </div>
                            </div>

                        </div>
        </div>
                );
}
