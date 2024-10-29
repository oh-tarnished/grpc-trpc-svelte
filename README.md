# Full gRPC Support with tRPC Middleware

 This project demonstrates a full-stack setup using gRPC as the backend service with a tRPC server acting as a bridge to expose gRPC methods to a Svelte frontend.

 ## Overview

 **Architecture:**
 - **gRPC Server (Go)**: Provides core gRPC services.
 - **tRPC Server (Node.js with TypeScript)**: Acts as a middleware that communicates with the Go gRPC server via a gRPC client and exposes APIs to the frontend.
 - **Svelte Frontend**: Connects to the tRPC server and provides a user interface.

 **Data Flow:**
 1. **Go gRPC Server** serves data on defined protobuf methods.
 2. **tRPC Server** acts as a gRPC client to the Go server, exposing the same methods over HTTP/WebSocket via tRPC.
 3. **Svelte Client** interacts with the tRPC server to access gRPC functionality.

 ## Setup Guide

 ### 1. Set Up the Go gRPC Server
 1. Navigate to the `remote` directory.
 2. Run `go run server.go` to start the Go gRPC server.
 3. Ensure it listens on a specified port (e.g., `localhost:50051`).
 ### 2. Set Up the tRPC Server
 1. In the `trpc` directory, install dependencies:
    ```bash
    npm install
    ```
 2. Configure `client.ts` to connect to the Go server as a gRPC client using generated `service_pb.js` and `service_grpc_pb.js` files.
 3. Set up `router.ts` to expose methods via tRPC.
 4. Run the server with:
    ```bash
    node server.ts
    ```
 5. The tRPC server should now be accessible (e.g., on `http://localhost:4000` or via WebSocket if subscriptions are required).

 ### 3. Set Up the Svelte Client
 1. **Install dependencies** in the root Svelte project directory:
    ```bash
    npm install
    ```

 2. **Configure `client.ts`** in `src/lib/trpc` to connect to the tRPC server.

 3. Use pages in `src/routes` (e.g., `GetStateInfo.svelte`, `Chat.svelte`) to call tRPC methods.

 ### Running the Full Setup

 - **Run the Go gRPC server** by navigating to the `remote` directory and using:

   ```bash
   go run server.go
   ```

 - **Run the tRPC server** in the `trpc` directory:

   ```bash
   node server.ts
   ```

 - **Run the Svelte client** in the root directory:

   ```bash
   npm run dev
   ```

 ### Notes

 - **WebSockets**: Ensure WebSocket support on the tRPC server for real-time subscriptions.
 - **Protobuf Generation**: Use `protobuf_generate.sh` in `remote/protobuf` to regenerate Go and Node.js protobuf files if `.proto` files are updated.
