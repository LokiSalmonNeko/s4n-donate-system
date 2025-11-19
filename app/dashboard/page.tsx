'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
    const [settings, setSettings] = useState({
        imageUrl: '',
        soundUrl: '',
        fontFamily: 'sans-serif',
        duration: 5000,
        animationType: 'fade',
    });
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

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
        } catch (error) {
            alert('儲存失敗');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="ts-center"><div className="ts-loading is-large"></div></div>;

    return (
        <div className="ts-container has-top-spaced-large">
            <div className="ts-grid is-relaxed is-2-columns">

                {/* 設定區塊 */}
                <div className="column">
                    <div className="ts-box">
                        <div className="ts-content">
                            <div className="ts-header is-heavy">通知設定</div>
                        </div>
                        <div className="ts-divider"></div>
                        <div className="ts-content">
                            <form onSubmit={handleSaveSettings}>
                                <div className="ts-grid is-stacked">
                                    <div className="column">
                                        <label className="ts-text is-label">圖片 URL</label>
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="url"
                                                value={settings.imageUrl || ''}
                                                onChange={(e) => setSettings({ ...settings, imageUrl: e.target.value })}
                                                placeholder="https://example.com/image.gif"
                                            />
                                        </div>
                                    </div>
                                    <div className="column">
                                        <label className="ts-text is-label">音效 URL</label>
                                        <div className="ts-input is-fluid">
                                            <input
                                                type="url"
                                                value={settings.soundUrl || ''}
                                                onChange={(e) => setSettings({ ...settings, soundUrl: e.target.value })}
                                                placeholder="https://example.com/sound.mp3"
                                            />
                                        </div>
                                    </div>
                                    <div className="column">
                                        <label className="ts-text is-label">字型</label>
                                        <div className="ts-select is-fluid">
                                            <select
                                                value={settings.fontFamily}
                                                onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value })}
                                            >
                                                <option value="sans-serif">無襯線體 (Sans-serif)</option>
                                                <option value="serif">襯線體 (Serif)</option>
                                                <option value="'Noto Sans TC', sans-serif">Noto Sans TC</option>
                                            </select>
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
                                        <label className="ts-text is-label">OBS Browser Source URL</label>
                                        <div className="ts-box is-secondary is-horizontal">
                                            <div className="ts-content is-dense">
                                                {typeof window !== 'undefined' ? `${window.location.origin}/obs` : '/obs'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <button type="submit" disabled={saving} className={`ts-button is-fluid is-primary ${saving ? 'is-loading' : ''}`}>
                                            儲存設定
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* 贊助紀錄區塊 */}
                <div className="column">
                    <div className="ts-box">
                        <div className="ts-content is-dense">
                            <div className="ts-grid is-2-columns is-middle-aligned">
                                <div className="column is-fluid">
                                    <div className="ts-header is-heavy">最近贊助</div>
                                </div>
                                <div className="column">
                                    <button onClick={fetchData} className="ts-button is-small is-icon is-secondary">
                                        <span className="ts-icon is-rotate-right-icon"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ts-divider"></div>
                        <div className="ts-content" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                            {donations.length === 0 ? (
                                <div className="ts-text is-center-aligned is-secondary">尚無贊助紀錄</div>
                            ) : (
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
