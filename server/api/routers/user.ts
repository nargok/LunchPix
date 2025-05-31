import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async () => {
    // ここでSupabaseからユーザーを取得する処理を実装
    return [];
  }),

  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      // ここでSupabaseにユーザーを作成する処理を実装
      return { id: '1', ...input };
    }),
}); 