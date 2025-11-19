import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await prisma.alertSettings.findFirst();
    return {
      title: settings?.siteName || "S4N Donate System",
      description: settings?.slogan || "Support your favorite streamer!",
      icons: {
        icon: settings?.logoUrl || "/favicon.ico",
      },
    };
  } catch (error) {
    return {
      title: "S4N Donate System",
      description: "Support your favorite streamer!",
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/tocas@5.0.0/dist/tocas.min.css" />
        <script src="https://unpkg.com/tocas@5.0.0/dist/tocas.min.js" async></script>
      </head>
      <body className={`${notoSansTC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
