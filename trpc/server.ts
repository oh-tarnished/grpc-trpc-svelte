import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';
import { appRouter } from './router';

const wss = new ws.Server({ port: 4000 });

applyWSSHandler({
    wss,
    router: appRouter,
    createContext: () => ({}),
});

console.log('tRPC WebSocket server running on ws://localhost:4000');
