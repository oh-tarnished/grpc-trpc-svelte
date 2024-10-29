#!/bin/bash

# Ensure protoc is installed and the Go plugins are available
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# Generate protobuf and gRPC code directly in the protobuf folder
protoc --proto_path=protobuf \
       --go_out=protobuf \
       --go-grpc_out=protobuf \
       protobuf/service.proto