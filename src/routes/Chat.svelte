<script lang="ts">
  import trpc from "../trpc/client";
  import { writable } from "svelte/store";

  const chatMessages = writable<string[]>([]);

  function startChat(messages: string[]) {
    trpc.chat.subscribe(messages, {
      onData: (response: any) =>
        chatMessages.update((msgs) => [...msgs, response.updateInfo]),
    });
  }

  startChat(["Hello", "How are you?", "Goodbye"]);
</script>

<div>
  <h1>Chat Messages</h1>
  <ul>
    {#each $chatMessages as message}
      <li>{message}</li>
    {/each}
  </ul>
</div>
