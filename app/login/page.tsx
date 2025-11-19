'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push('/dashboard');
            } else {
                const data = await res.json();
                setError(data.error || '登入失敗');
            }
        } catch (err) {
            setError('發生錯誤，請稍後再試');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ts-center">
            <div className="ts-container is-narrow" style={{ marginTop: '10vh' }}>
                <div className="ts-header is-center is-heavy is-big is-icon">
                    <span className="ts-icon is-user-circle-icon"></span>
                    後台登入
                </div>
                <div className="ts-space is-large"></div>

                <form className="ts-box" onSubmit={handleSubmit}>
                    <div className="ts-content is-dense">
                        <div className="ts-grid is-relaxed">
                            <div className="column is-16-wide">
                                <div className="ts-text is-label">帳號</div>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Admin Username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="column is-16-wide">
                                <div className="ts-text is-label">密碼</div>
                                <div className="ts-input is-fluid">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Admin Password"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="column is-16-wide">
                                    <div className="ts-notice is-negative">
                                        <div className="content">{error}</div>
                                    </div>
                                </div>
                            )}

                            <div className="column is-16-wide">
                                <button
                                    className={`ts-button is-fluid ${loading ? 'is-loading' : ''}`}
                                    type="submit"
                                >
                                    登入
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
