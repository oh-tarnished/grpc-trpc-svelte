import { initTRPC } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import { z } from 'zod';
import { getStateInfo, getStateUpdates, updateState, chat } from './client'; // Import your gRPC client functions

const t = initTRPC.create();

export const appRouter = t.router({
    // Unary RPC - GetStateInfo
    getStateInfo: t.procedure
        .input(z.string())
        .query(async ({ input }) => {
            // Directly use a promise for the unary response
            return await getStateInfo(input);
        }),

    // Server-Side Streaming RPC - GetStateUpdates
    getStateUpdates: t.procedure
        .input(z.string())
        .subscription(({ input }) => {
            return observable((emit) => {
                const stream = getStateUpdates(input);

                stream.on('data', (update) => {
                    emit.next(update.toObject());
                });
                stream.on('end', () => emit.complete());
                stream.on('error', (error) => emit.error(error));

                // Cleanup function
                return () => stream.cancel();
            });
        }),

    // Client-Side Streaming RPC - UpdateState
    updateState: t.procedure
        .input(z.array(z.string()))
        .subscription(({ input }) => {
            return observable((emit) => {
                updateState(input)
                    .then((response) => {
                        emit.next(response);
                        emit.complete();
                    })
                    .catch((error) => emit.error(error));
            });
        }),

    // Bidirectional Streaming RPC - Chat
    chat: t.procedure
        .input(z.array(z.string()))
        .subscription(({ input }) => {
            return observable((emit) => {
                const stream = chat(input);

                stream.on('data', (response) => {
                    emit.next(response.toObject());
                });
                stream.on('end', () => emit.complete());
                stream.on('error', (error) => emit.error(error));

                // Cleanup function
                return () => stream.cancel();
            });
        }),
});

export type AppRouter = typeof appRouter;
