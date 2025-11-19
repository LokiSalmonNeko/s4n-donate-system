'use client';

import { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

interface AlertSettings {
    imageUrl?: string;
    soundUrl?: string;
    fontFamily: string;
    duration: number;
    animationType: string;
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
            }, 500); // Wait for fade out animation
        }, settings?.duration || 5000);
    };

    if (!settings) return null;

    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {currentAlert && (
                <div
                    className={`transition-opacity duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        } flex flex-col items-center text-center space-y-4 max-w-2xl`}
                    style={{ fontFamily: settings.fontFamily }}
                >
                    {settings.imageUrl && (
                        <img
                            src={settings.imageUrl}
                            alt="Alert Image"
                            className="max-w-xs max-h-xs object-contain animate-bounce-slow"
                        />
                    )}

                    <div className="bg-white/90 p-6 rounded-xl shadow-2xl border-4 border-[var(--color-primary)] relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)]"></div>

                        <h1 className="text-4xl font-black text-[var(--color-primary)] mb-2 drop-shadow-sm">
                            {currentAlert.donorName}
                        </h1>
                        <div className="text-2xl font-bold text-[var(--color-text)] mb-4">
                            贊助了 <span className="text-[var(--color-accent)] text-3xl">${currentAlert.amount}</span>
                        </div>
                        {currentAlert.message && (
                            <p className="text-xl text-[var(--color-text-light)] font-medium break-words max-w-lg leading-relaxed">
                                {currentAlert.message}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
