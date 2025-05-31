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