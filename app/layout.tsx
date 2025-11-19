import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "S4N Donate System",
  description: "Support your favorite streamer!",
};

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
