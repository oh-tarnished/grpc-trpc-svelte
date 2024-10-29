// package: example
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";

interface IStateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStateInfo: IStateServiceService_IGetStateInfo;
    getStateUpdates: IStateServiceService_IGetStateUpdates;
    updateState: IStateServiceService_IUpdateState;
    chat: IStateServiceService_IChat;
}

interface IStateServiceService_IGetStateInfo extends grpc.MethodDefinition<service_pb.StateRequest, service_pb.StateResponse> {
    path: "/example.StateService/GetStateInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.StateRequest>;
    requestDeserialize: grpc.deserialize<service_pb.StateRequest>;
    responseSerialize: grpc.serialize<service_pb.StateResponse>;
    responseDeserialize: grpc.deserialize<service_pb.StateResponse>;
}
interface IStateServiceService_IGetStateUpdates extends grpc.MethodDefinition<service_pb.StateRequest, service_pb.StateUpdate> {
    path: "/example.StateService/GetStateUpdates";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<service_pb.StateRequest>;
    requestDeserialize: grpc.deserialize<service_pb.StateRequest>;
    responseSerialize: grpc.serialize<service_pb.StateUpdate>;
    responseDeserialize: grpc.deserialize<service_pb.StateUpdate>;
}
interface IStateServiceService_IUpdateState extends grpc.MethodDefinition<service_pb.StateRequest, service_pb.StateResponse> {
    path: "/example.StateService/UpdateState";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.StateRequest>;
    requestDeserialize: grpc.deserialize<service_pb.StateRequest>;
    responseSerialize: grpc.serialize<service_pb.StateResponse>;
    responseDeserialize: grpc.deserialize<service_pb.StateResponse>;
}
interface IStateServiceService_IChat extends grpc.MethodDefinition<service_pb.StateRequest, service_pb.StateUpdate> {
    path: "/example.StateService/Chat";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<service_pb.StateRequest>;
    requestDeserialize: grpc.deserialize<service_pb.StateRequest>;
    responseSerialize: grpc.serialize<service_pb.StateUpdate>;
    responseDeserialize: grpc.deserialize<service_pb.StateUpdate>;
}

export const StateServiceService: IStateServiceService;

export interface IStateServiceServer extends grpc.UntypedServiceImplementation {
    getStateInfo: grpc.handleUnaryCall<service_pb.StateRequest, service_pb.StateResponse>;
    getStateUpdates: grpc.handleServerStreamingCall<service_pb.StateRequest, service_pb.StateUpdate>;
    updateState: grpc.handleClientStreamingCall<service_pb.StateRequest, service_pb.StateResponse>;
    chat: grpc.handleBidiStreamingCall<service_pb.StateRequest, service_pb.StateUpdate>;
}

export interface IStateServiceClient {
    getStateInfo(request: service_pb.StateRequest, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientUnaryCall;
    getStateInfo(request: service_pb.StateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientUnaryCall;
    getStateInfo(request: service_pb.StateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientUnaryCall;
    getStateUpdates(request: service_pb.StateRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<service_pb.StateUpdate>;
    getStateUpdates(request: service_pb.StateRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<service_pb.StateUpdate>;
    updateState(callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    updateState(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    updateState(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    updateState(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    chat(): grpc.ClientDuplexStream<service_pb.StateRequest, service_pb.StateUpdate>;
    chat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<service_pb.StateRequest, service_pb.StateUpdate>;
    chat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<service_pb.StateRequest, service_pb.StateUpdate>;
}

export class StateServiceClient extends grpc.Client implements IStateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getStateInfo(request: service_pb.StateRequest, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientUnaryCall;
    public getStateInfo(request: service_pb.StateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientUnaryCall;
    public getStateInfo(request: service_pb.StateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientUnaryCall;
    public getStateUpdates(request: service_pb.StateRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<service_pb.StateUpdate>;
    public getStateUpdates(request: service_pb.StateRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<service_pb.StateUpdate>;
    public updateState(callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    public updateState(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    public updateState(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    public updateState(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.StateResponse) => void): grpc.ClientWritableStream<service_pb.StateRequest>;
    public chat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<service_pb.StateRequest, service_pb.StateUpdate>;
    public chat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<service_pb.StateRequest, service_pb.StateUpdate>;
}
