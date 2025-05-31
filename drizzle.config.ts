import type { Config } from 'drizzle-kit';

export default {
  schema: './server/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    port: 54322,
    ssl: false
  },
} satisfies Config; 