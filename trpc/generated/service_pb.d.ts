// package: example
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StateRequest extends jspb.Message { 
    getStateName(): string;
    setStateName(value: string): StateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StateRequest): StateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateRequest;
    static deserializeBinaryFromReader(message: StateRequest, reader: jspb.BinaryReader): StateRequest;
}

export namespace StateRequest {
    export type AsObject = {
        stateName: string,
    }
}

export class StateResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): StateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StateResponse): StateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateResponse;
    static deserializeBinaryFromReader(message: StateResponse, reader: jspb.BinaryReader): StateResponse;
}

export namespace StateResponse {
    export type AsObject = {
        message: string,
    }
}

export class StateUpdate extends jspb.Message { 
    getUpdateInfo(): string;
    setUpdateInfo(value: string): StateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: StateUpdate): StateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateUpdate;
    static deserializeBinaryFromReader(message: StateUpdate, reader: jspb.BinaryReader): StateUpdate;
}

export namespace StateUpdate {
    export type AsObject = {
        updateInfo: string,
    }
}
