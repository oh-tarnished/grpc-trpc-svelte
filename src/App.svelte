<script lang="ts">
  import trpc from "./trpc/client";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // Stores for each method
  const stateInfo = writable<string>("");
  const stateUpdates = writable<string[]>([]);
  const updateResult = writable<string>("");
  const chatMessages = writable<string[]>([]);

  // Methods for each tRPC function
  async function fetchStateInfo(stateName: string) {
    console.log("Fetching state info for:", stateName);
    try {
      const result = await trpc.getStateInfo.query(stateName);
      stateInfo.set(result.message);
      console.log("State info result:", result.message);
    } catch (error) {
      console.error("Error fetching state info:", error);
    }
  }

  function subscribeToStateUpdates(stateName: string) {
    console.log("Subscribing to state updates for:", stateName);
    trpc.getStateUpdates.subscribe(stateName, {
      onData: (update: any) => {
        console.log("Received state update:", update.updateInfo);
        stateUpdates.update((u) => [...u, update.updateInfo]);
      },
      onError: (error) => console.error("Error in state updates:", error),
    });
  }

  function sendStateUpdates(stateNames: string[]) {
    console.log("Sending state updates for:", stateNames);
    trpc.updateState.subscribe(stateNames, {
      onData: (response: any) => {
        updateResult.set(response.message);
        console.log("Update state response:", response.message);
      },
      onError: (error) => console.error("Error in update state:", error),
    });
  }

  function startChat(messages: string[]) {
    console.log("Starting chat with messages:", messages);
    trpc.chat.subscribe(messages, {
      onData: (response: any) => {
        chatMessages.update((msgs) => [...msgs, response.updateInfo]);
        console.log("Chat message received:", response.updateInfo);
      },
      onError: (error) => console.error("Error in chat:", error),
    });
  }

  // Initialize calls
  onMount(() => {
    fetchStateInfo("California");
    subscribeToStateUpdates("California");
    sendStateUpdates(["California", "Texas", "New York"]);
    startChat(["Hello", "How are you?", "Goodbye"]);
  });
</script>

<div>
  <h1>tRPC Methods Demo</h1>

  <!-- GetStateInfo Section -->
  <section>
    <h2>Unary RPC - State Info</h2>
    <p>{$stateInfo}</p>
  </section>

  <!-- GetStateUpdates Section -->
  <section>
    <h2>Server-Side Streaming - State Updates</h2>
    <ul>
      {#each $stateUpdates as update}
        <li>{update}</li>
      {/each}
    </ul>
  </section>

  <!-- UpdateState Section -->
  <section>
    <h2>Client-Side Streaming - Update State</h2>
    <p>{$updateResult}</p>
  </section>

  <!-- Chat Section -->
  <section>
    <h2>Bidirectional Streaming - Chat</h2>
    <ul>
      {#each $chatMessages as message}
        <li>{message}</li>
      {/each}
    </ul>
  </section>
</div>
