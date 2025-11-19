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
    alertHeight?: number;
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
        // Small delay to ensure render before animation starts
        requestAnimationFrame(() => {
            setIsVisible(true);
        });

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
            }, settings?.animationDuration || 1000); // Wait for exit animation
        }, settings?.duration || 5000);
    };

    if (!settings) return null;

    // Animation Styles Calculation
    const getAnimationStyles = (): React.CSSProperties => {
        const base: React.CSSProperties = {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1,
            transitionProperty: 'all',
            transitionDuration: `${settings.animationDuration || 1000}ms`,
            transitionTimingFunction: isVisible
                ? 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // easeOutBack (Entry)
                : 'cubic-bezier(0.6, -0.28, 0.735, 0.045)', // easeInBack (Exit)
        };

        if (!isVisible) {
            base.opacity = 0;
            switch (settings.animationType) {
                case 'slide-up':
                    base.transform = 'translateY(2.5rem) scale(0.95)';
                    break;
                case 'slide-down':
                    base.transform = 'translateY(-2.5rem) scale(0.95)';
                    break;
                case 'zoom':
                    base.transform = 'scale(0)';
                    break;
                case 'bounce':
                    base.transform = 'scale(0.5)';
                    break;
                case 'fade':
                default:
                    // just opacity 0
                    break;
            }
        } else {
            base.opacity = 1;
            base.transform = 'translateY(0) scale(1)';
        }
        return base;
    };

    // Positioning styles
    const getContainerStyle = () => {
        const style: React.CSSProperties = {
            display: 'flex',
            width: '100vw',
            height: '100vh',
            padding: '2rem',
            boxSizing: 'border-box',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            minHeight: '100vh',
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

    const renderMessage = () => {
        if (!currentAlert) return null;
        const template = settings.messageTemplate || '{name} 贊助了 ${amount}';
        // Replace {name} first
        const textWithName = template.replace('{name}', currentAlert.donorName);
        // Split by {amount} to isolate it
        const parts = textWithName.split('{amount}');

        return (
            <>
                {parts.map((part, i) => (
                    <span key={i}>
                        {part}
                        {i < parts.length - 1 && (
                            <span style={{ color: settings.amountColor || '#ff6b6b', fontWeight: 'bold' }}>
                                {currentAlert.amount}
                            </span>
                        )}
                    </span>
                ))}
            </>
        );
    };

    return (
        <div style={getContainerStyle()}>
            {currentAlert && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '1rem',
                        fontFamily: settings.fontFamily,
                        width: settings.alertWidth ? `${settings.alertWidth}px` : '600px',
                        minHeight: settings.alertHeight ? `${settings.alertHeight}px` : 'auto',
                        maxWidth: '100%',
                        ...getAnimationStyles()
                    }}
                >
                    {settings.imageUrl && (
                        <img
                            src={settings.imageUrl}
                            alt="Alert Image"
                            style={{
                                maxWidth: '20rem',
                                maxHeight: '20rem',
                                objectFit: 'contain',
                                marginBottom: '1rem'
                            }}
                        />
                    )}

                    <div
                        style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            border: '4px solid',
                            position: 'relative',
                            overflow: 'hidden',
                            width: '100%',
                            backgroundColor: settings.backgroundColor || '#ffffff',
                            borderColor: settings.borderColor || '#000000'
                        }}
                    >
                        <h1
                            style={{
                                fontWeight: 900,
                                marginBottom: '0.5rem',
                                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                                color: settings.textColor || '#1a1a1a',
                                fontSize: `${settings.fontSize || 32}px`,
                                lineHeight: '1.4',
                                margin: 0
                            }}
                        >
                            {renderMessage()}
                        </h1>
                        {currentAlert.message && (
                            <p
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 500,
                                    wordBreak: 'break-word',
                                    maxWidth: '32rem',
                                    lineHeight: 1.625,
                                    margin: '0 auto',
                                    color: settings.textColor || '#1a1a1a',
                                    opacity: 0.9
                                }}
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
