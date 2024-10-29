package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net"
	"time"

	pb "example.com/test/protobuf"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// StateServiceServer is the server for our service
type StateServiceServer struct {
	pb.UnimplementedStateServiceServer
}

// Implement Unary RPC
func (s *StateServiceServer) GetStateInfo(ctx context.Context, req *pb.StateRequest) (*pb.StateResponse, error) {
	log.Printf("[Unary] Received GetStateInfo request for state: %s", req.StateName)
	message := fmt.Sprintf("Information for state: %s", req.StateName)
	return &pb.StateResponse{Message: message}, nil
}

// Implement Server-Side Streaming RPC
func (s *StateServiceServer) GetStateUpdates(req *pb.StateRequest, stream pb.StateService_GetStateUpdatesServer) error {
	log.Printf("[Server-Side Streaming] Received GetStateUpdates request for state: %s", req.StateName)
	updates := []string{"Update 1", "Update 2", "Update 3"}
	for _, update := range updates {
		log.Printf("[Server-Side Streaming] Sending update to state: %s - %s", req.StateName, update)
		if err := stream.Send(&pb.StateUpdate{UpdateInfo: update}); err != nil {
			return err
		}
		time.Sleep(1 * time.Second)
	}
	return nil
}

// Implement Client-Side Streaming RPC
func (s *StateServiceServer) UpdateState(stream pb.StateService_UpdateStateServer) error {
	log.Println("[Client-Side Streaming] Received UpdateState stream")
	var updates []string
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			log.Printf("[Client-Side Streaming] Closing stream with received updates: %v", updates)
			return stream.SendAndClose(&pb.StateResponse{Message: fmt.Sprintf("Received updates: %v", updates)})
		}
		if err != nil {
			return err
		}
		updates = append(updates, req.StateName)
		log.Printf("[Client-Side Streaming] Received update for state: %s", req.StateName)
	}
}

// Implement Bidirectional Streaming RPC
func (s *StateServiceServer) Chat(stream pb.StateService_ChatServer) error {
	log.Println("[Bidirectional Streaming] Chat stream started")
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			log.Println("[Bidirectional Streaming] Chat stream ended by client")
			return nil
		}
		if err != nil {
			return err
		}
		log.Printf("[Bidirectional Streaming] Received message for state: %s", req.StateName)
		response := &pb.StateUpdate{UpdateInfo: fmt.Sprintf("Received message: %s", req.StateName)}
		if err := stream.Send(response); err != nil {
			return err
		}
		log.Printf("[Bidirectional Streaming] Sent response for state: %s", req.StateName)
	}
}

func main() {
	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterStateServiceServer(grpcServer, &StateServiceServer{})

	// Enable reflection on the gRPC server
	reflection.Register(grpcServer)

	log.Println("gRPC server is running on port 50051...")
	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
