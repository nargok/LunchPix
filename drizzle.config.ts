import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'bento',
    port: 5432,
    ssl: false
  },
} satisfies Config; 