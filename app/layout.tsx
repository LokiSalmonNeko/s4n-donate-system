import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await prisma.alertSettings.findFirst();
    const logoUrl = settings?.logoUrl ? `${settings.logoUrl}?v=${Date.now()}` : null;
    const icons = logoUrl ? {
      icon: logoUrl,
      shortcut: logoUrl,
      apple: logoUrl,
    } : [];

    return {
      title: settings?.browserTitle || settings?.siteName || "S4N Donate System",
      description: "Support your favorite streamer!",
      icons: icons,
    };
  } catch (e) {
    console.warn("Failed to fetch settings for metadata (likely during build):", e);
    return {
      title: "S4N Donate System",
      description: "Support your favorite streamer!",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch settings for theme color injection
  let themeColor = '#00d1b2'; // Default Tocas UI Teal
  try {
    const settings = await prisma.alertSettings.findFirst();
    if (settings?.themeColor) {
      themeColor = settings.themeColor;
    }
  } catch (e) {
    // Ignore error during build
  }

  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable}`}>
        {/* Tocas UI */}
        <link rel="stylesheet" href="https://unpkg.com/tocas@5.0.0/dist/tocas.min.css" />
        <script src="https://unpkg.com/tocas@5.0.0/dist/tocas.min.js" async></script>

        {/* Theme Color Override */}
        <style dangerouslySetInnerHTML={{
          __html: `
          :root {
            --ts-primary-500: ${themeColor};
            --ts-primary-600: ${themeColor}; /* Ideally darker, but keeping simple for now */
            --ts-primary-100: ${themeColor}20; /* 20 is approx 12% opacity hex */
          }
        `}} />

        {children}
      </body>
    </html>
  );
}
