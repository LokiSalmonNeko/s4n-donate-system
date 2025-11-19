# S4N Donate System (S4N 贊助系統)

這是一個開源的實況主贊助平台，支援 ECPay (綠界) 和 O'Pay (歐付寶) 金流，並提供 OBS 即時通知功能。

[![Deployed on Zeabur](https://zeabur.com/deployed-on-zeabur-dark.svg)](https://zeabur.com/templates/8cvl58)

## 功能特色

- **公開贊助頁面**：觀眾可以輸入暱稱、金額、留言並選擇支付方式。
- **實況主後台**：查看最近贊助紀錄，設定通知樣式 (圖片、音效、字型)。
- **OBS 通知**：專屬的 Browser Source 網址，贊助成功後即時顯示動畫與播放音效。
- **現代化日系 UI**：採用 **Tocas UI** 設計系統，提供柔和、現代的視覺體驗。
- **Docker 支援**：提供 Docker Image (`lokisalmonneko/s4n-donate-system`) 與 Docker Compose 配置。

## 快速部署 (Zeabur)

本專案支援透過 Zeabur 一鍵部署，並使用預先建置好的 Docker Image，部署速度更快。

1. 點擊上方的 "Deployed on Zeabur" 按鈕。
2. 選擇您的 GitHub 帳號進行授權。
3. Zeabur 會自動建立服務並要求設定環境變數。
4. 填入以下必要的環境變數：
    - `DATABASE_URL`: (Zeabur 會自動提供 PostgreSQL 服務，通常不需要手動設定)
    - `ECPAY_MERCHANT_ID`: 您的綠界商店代號
    - `ECPAY_HASH_KEY`: 您的綠界 HashKey
    - `ECPAY_HASH_IV`: 您的綠界 HashIV
    - `OPAY_MERCHANT_ID`: 您的歐付寶商店代號
    - `OPAY_HASH_KEY`: 您的歐付寶 HashKey
    - `OPAY_HASH_IV`: 您的歐付寶 HashIV
    - `NEXT_PUBLIC_BASE_URL`: 您的 Zeabur 應用程式網址 (例如 `https://your-app.zeabur.app`)

## 本地開發

1. 安裝依賴：
   ```bash
   npm install
   ```

2. 啟動資料庫 (Docker)：
   ```bash
   docker-compose up -d db
   ```

3. 同步資料庫 Schema：
   ```bash
   npx prisma db push
   ```

4. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

## 相關連結

- [Next.js Documentation](https://nextjs.org/docs)
- [Zeabur Documentation](https://docs.zeabur.com)
- [Tocas UI](https://tocas-ui.com/)
