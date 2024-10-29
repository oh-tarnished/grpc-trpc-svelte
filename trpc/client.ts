import * as grpc from '@grpc/grpc-js';
import { StateServiceClient } from './generated/service_grpc_pb'; // Adjust the import path as needed
import { StateRequest } from './generated/service_pb';

// Initialize the client
const client = new StateServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

// Unary RPC - GetStateInfo
export function getStateInfo(stateName: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const request = new StateRequest();
        request.setStateName(stateName);

        client.getStateInfo(request, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response?.toObject());
            }
        });
    });
}

// Server-Side Streaming RPC - GetStateUpdates
export function getStateUpdates(stateName: string): grpc.ClientReadableStream<any> {
    const request = new StateRequest();
    request.setStateName(stateName);
    return client.getStateUpdates(request);
}

// Client-Side Streaming RPC - UpdateState
export function updateState(stateNames: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
        const stream = client.updateState((error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response?.toObject());
            }
        });

        stateNames.forEach((stateName) => {
            const request = new StateRequest();
            request.setStateName(stateName);
            stream.write(request);
        });

        stream.end();
    });
}

// Bidirectional Streaming RPC - Chat
export function chat(messages: string[]): grpc.ClientDuplexStream<StateRequest, any> {
    const stream = client.chat();

    messages.forEach((message) => {
        const request = new StateRequest();
        request.setStateName(message);
        stream.write(request);
    });

    stream.end();
    return stream;
}

// gRPC server (go) -> gRPC client(node-ts) - tRPC server(node-ts) -> tRPC client(svelte)