# S4N Donate System (S4N 贊助系統)

一個開源的實況主贊助平台，支援 ECPay (綠界) 和 O'Pay (歐付寶) 金流，並提供 OBS 即時通知功能。

## 功能特色

- **公開贊助頁面**：觀眾可以輸入暱稱、金額、留言並選擇支付方式。
- **實況主後台**：查看最近贊助紀錄，設定通知樣式 (圖片、音效、字型)。
- **OBS 通知**：專屬的 Browser Source 網址，贊助成功後即時顯示動畫與播放音效。
- **現代化日系 UI**：採用 **Tocas UI** 設計系統，提供柔和、現代的視覺體驗。

## 快速開始 (Docker Compose)

最簡單的部署方式是使用 `docker-compose.yml`：

```yaml
version: '3'
services:
  app:
    image: lokisalmonneko/s4n-donate-system:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/donate
      - NEXT_PUBLIC_BASE_URL=http://localhost:3000
      # 金流設定 (若留空則使用測試帳號，正式環境請務必填寫)
      - ECPAY_MERCHANT_ID=
      - ECPAY_HASH_KEY=
      - ECPAY_HASH_IV=
      - OPAY_MERCHANT_ID=
      - OPAY_HASH_KEY=
      - OPAY_HASH_IV=
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=donate
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

## 環境變數說明

| 變數名稱 | 說明 | 預設值 / 範例 |
| --- | --- | --- |
| `DATABASE_URL` | PostgreSQL 連線字串 | `postgresql://user:password@db:5432/donate` |
| `NEXT_PUBLIC_BASE_URL` | 網站對外網址 (用於金流回調) | `http://localhost:3000` |
| `ECPAY_MERCHANT_ID` | 綠界商店代號 | (測試帳號) |
| `ECPAY_HASH_KEY` | 綠界 HashKey | (測試帳號) |
| `ECPAY_HASH_IV` | 綠界 HashIV | (測試帳號) |
| `OPAY_MERCHANT_ID` | 歐付寶商店代號 | (測試帳號) |
| `OPAY_HASH_KEY` | 歐付寶 HashKey | (測試帳號) |
| `OPAY_HASH_IV` | 歐付寶 HashIV | (測試帳號) |

## 頁面路徑

- **首頁**: `/`
- **管理後台**: `/dashboard`
- **OBS 瀏覽器來源**: `/obs`
- **管理員登入**: `/login`

## 相關連結

- [GitHub Repository](https://github.com/LokiSalmonNeko/s4n-donate-system)
- [Zeabur Template](https://zeabur.com/templates/PZ7FR9)
