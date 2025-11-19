'use client';

import { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

interface AlertSettings {
    imageUrl?: string;
    soundUrl?: string;
    fontFamily: string;
    duration: number;
    animationType: string;
    messageTemplate?: string;
    textColor?: string;
    amountColor?: string;
    fontSize?: number;
    animationDuration?: number;
    backgroundColor?: string;
    borderColor?: string;
    alertWidth?: number;
    verticalAlign?: string;
    horizontalAlign?: string;
}

interface Donation {
    id: string;
    donorName: string;
    amount: number;
    message?: string;
}

export default function OBSPage() {
    const [settings, setSettings] = useState<AlertSettings | null>(null);
    const [currentAlert, setCurrentAlert] = useState<Donation | null>(null);
    const [queue, setQueue] = useState<Donation[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        // Fetch settings
        fetch('/api/settings')
            .then((res) => res.json())
            .then((data) => setSettings(data));

        // Initialize Socket.io
        socketInitializer();

        return () => {
            if (socketRef.current) socketRef.current.disconnect();
        };
    }, []);

    const socketInitializer = async () => {
        await fetch('/api/socket/io');
        socketRef.current = io({
            path: '/api/socket/io',
            addTrailingSlash: false,
        });

        socketRef.current.on('connect', () => {
            console.log('Connected to Socket.io');
        });

        socketRef.current.on('new-donation', (donation: Donation) => {
            console.log('New donation received:', donation);
            setQueue((prev) => [...prev, donation]);
        });
    };

    useEffect(() => {
        if (!currentAlert && queue.length > 0 && settings) {
            playAlert(queue[0]);
            setQueue((prev) => prev.slice(1));
        }
    }, [currentAlert, queue, settings]);

    const playAlert = (donation: Donation) => {
        setCurrentAlert(donation);
        setIsVisible(true);

        if (settings?.soundUrl) {
            if (!audioRef.current) {
                audioRef.current = new Audio(settings.soundUrl);
            } else {
                audioRef.current.src = settings.soundUrl;
            }
            audioRef.current.play().catch((e) => console.error('Audio play failed:', e));
        }

        setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentAlert(null);
            }, settings?.animationDuration || 1000); // Wait for fade out animation
        }, settings?.duration || 5000);
    };

    if (!settings) return null;

    // Animation classes
    const getAnimationClass = () => {
        const base = 'transition-all transform';
        if (!isVisible) return `${base} opacity-0 scale-95 translate-y-4`;

        switch (settings.animationType) {
            case 'slide-up': return `${base} opacity-100 translate-y-0`;
            case 'slide-down': return `${base} opacity-100 translate-y-0`;
            case 'zoom': return `${base} opacity-100 scale-100`;
            case 'bounce': return `${base} opacity-100 animate-bounce`;
            case 'fade':
            default: return `${base} opacity-100 scale-100`;
        }
    };

    // Positioning styles
    const getContainerStyle = () => {
        const style: React.CSSProperties = {
            display: 'flex',
            width: '100vw',
            height: '100vh',
            padding: '2rem',
            boxSizing: 'border-box',
        };

        switch (settings.verticalAlign) {
            case 'start': style.alignItems = 'flex-start'; break;
            case 'end': style.alignItems = 'flex-end'; break;
            case 'center':
            default: style.alignItems = 'center'; break;
        }

        switch (settings.horizontalAlign) {
            case 'start': style.justifyContent = 'flex-start'; break;
            case 'end': style.justifyContent = 'flex-end'; break;
            case 'center':
            default: style.justifyContent = 'center'; break;
        }

        return style;
    };

    return (
        <div className="min-h-screen overflow-hidden bg-transparent" style={getContainerStyle()}>
            {currentAlert && (
                <div
                    className={`${getAnimationClass()} flex flex-col items-center text-center space-y-4`}
                    style={{
                        fontFamily: settings.fontFamily,
                        transitionDuration: `${settings.animationDuration || 1000}ms`,
                        width: settings.alertWidth ? `${settings.alertWidth}px` : '600px',
                        maxWidth: '100%'
                    }}
                >
                    {settings.imageUrl && (
                        <img
                            src={settings.imageUrl}
                            alt="Alert Image"
                            className="max-w-xs max-h-xs object-contain"
                        />
                    )}

                    <div
                        className="p-6 rounded-xl shadow-2xl border-4 relative overflow-hidden w-full"
                        style={{
                            backgroundColor: settings.backgroundColor || '#ffffff',
                            borderColor: settings.borderColor || 'var(--color-primary)'
                        }}
                    >
                        {/* Decorative elements */}
                        <div
                            className="absolute top-0 left-0 w-full h-2"
                            style={{ backgroundColor: settings.borderColor || 'var(--color-primary)' }}
                        ></div>

                        <h1
                            className="font-black mb-2 drop-shadow-sm"
                            style={{
                                color: settings.textColor || 'var(--color-primary)',
                                fontSize: `${settings.fontSize || 32}px`
                            }}
                        >
                            {(settings.messageTemplate || '{name} 贊助了 ${amount}')
                                .replace('{name}', currentAlert.donorName)
                                .replace('{amount}', currentAlert.amount.toString())
                                .split('$').map((part: string, i: number) => (
                                    i === 0 ? part : <span key={i} style={{ color: settings.amountColor || 'var(--color-accent)', fontSize: '1.2em' }}>${part}</span>
                                ))
                            }
                        </h1>
                        {currentAlert.message && (
                            <p
                                className="text-xl font-medium break-words max-w-lg leading-relaxed mx-auto"
                                style={{ color: settings.textColor || 'var(--color-text-light)' }}
                            >
                                {currentAlert.message}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
