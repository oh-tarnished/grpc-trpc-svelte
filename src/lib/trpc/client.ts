import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../trpc/router';
import { createWSClient, wsLink } from '@trpc/client/links/wsLink';

const wsClient = createWSClient({
    url: 'ws://localhost:4000', // Ensure your server supports WebSocket at this URL
});

const trpc = createTRPCProxyClient<AppRouter>({
    links: [

        wsLink({
            client: wsClient,
        }),
    ],
});

export default trpc;
