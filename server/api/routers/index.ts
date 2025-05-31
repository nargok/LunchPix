import { createTRPCRouter } from '../trpc';
import { bentoRouter } from './bento';

export const appRouter = createTRPCRouter({
  bento: bentoRouter,
});

export type AppRouter = typeof appRouter; 