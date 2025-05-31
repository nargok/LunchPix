# Supabase

## How to start

install CLI
```
brew install supabase/tap/supabase
```

initialize supabase
```
supabase init
```

start container
```
supabase start
```

これで以下がすべてDockerで起動します
- PostgreSQL（DB）
- GoTrue（認証）
- Storage（MinIOベース）
- Edge API
- Realtime API


supabase studio URL
http://127.0.0.1:54323

| コマンド                | 説明                    |
| ------------------- | --------------------- |
| `supabase start`    | ローカル環境を起動（Dockerコンテナ） |
| `supabase stop`     | コンテナを停止               |
| `supabase status`   | 現在の状態を確認              |
| `supabase db reset` | データベースを初期化（※注意）       |
