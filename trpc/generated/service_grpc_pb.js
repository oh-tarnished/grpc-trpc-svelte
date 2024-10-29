// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_pb = require('./service_pb.js');

function serialize_example_StateRequest(arg) {
  if (!(arg instanceof service_pb.StateRequest)) {
    throw new Error('Expected argument of type example.StateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_StateRequest(buffer_arg) {
  return service_pb.StateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_StateResponse(arg) {
  if (!(arg instanceof service_pb.StateResponse)) {
    throw new Error('Expected argument of type example.StateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_StateResponse(buffer_arg) {
  return service_pb.StateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_StateUpdate(arg) {
  if (!(arg instanceof service_pb.StateUpdate)) {
    throw new Error('Expected argument of type example.StateUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_StateUpdate(buffer_arg) {
  return service_pb.StateUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}


// Define the service
var StateServiceService = exports.StateServiceService = {
  // Unary RPC
getStateInfo: {
    path: '/example.StateService/GetStateInfo',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.StateRequest,
    responseType: service_pb.StateResponse,
    requestSerialize: serialize_example_StateRequest,
    requestDeserialize: deserialize_example_StateRequest,
    responseSerialize: serialize_example_StateResponse,
    responseDeserialize: deserialize_example_StateResponse,
  },
  // Server-Side Streaming RPC
getStateUpdates: {
    path: '/example.StateService/GetStateUpdates',
    requestStream: false,
    responseStream: true,
    requestType: service_pb.StateRequest,
    responseType: service_pb.StateUpdate,
    requestSerialize: serialize_example_StateRequest,
    requestDeserialize: deserialize_example_StateRequest,
    responseSerialize: serialize_example_StateUpdate,
    responseDeserialize: deserialize_example_StateUpdate,
  },
  // Client-Side Streaming RPC
updateState: {
    path: '/example.StateService/UpdateState',
    requestStream: true,
    responseStream: false,
    requestType: service_pb.StateRequest,
    responseType: service_pb.StateResponse,
    requestSerialize: serialize_example_StateRequest,
    requestDeserialize: deserialize_example_StateRequest,
    responseSerialize: serialize_example_StateResponse,
    responseDeserialize: deserialize_example_StateResponse,
  },
  // Bidirectional Streaming RPC
chat: {
    path: '/example.StateService/Chat',
    requestStream: true,
    responseStream: true,
    requestType: service_pb.StateRequest,
    responseType: service_pb.StateUpdate,
    requestSerialize: serialize_example_StateRequest,
    requestDeserialize: deserialize_example_StateRequest,
    responseSerialize: serialize_example_StateUpdate,
    responseDeserialize: deserialize_example_StateUpdate,
  },
};

exports.StateServiceClient = grpc.makeGenericClientConstructor(StateServiceService);
