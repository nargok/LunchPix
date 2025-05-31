import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const bentoRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const bentos = await ctx.db.bento.findMany({
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: { createdAt: 'desc' },
      });

      let nextCursor: typeof input.cursor | undefined = undefined;
      if (bentos.length > input.limit) {
        const nextItem = bentos.pop();
        nextCursor = nextItem!.id;
      }

      return {
        items: bentos,
        nextCursor,
      };
    }),
}); 