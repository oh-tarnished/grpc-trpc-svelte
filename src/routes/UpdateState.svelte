<script lang="ts">
  import trpc from "../lib/trpc/client";
  import { writable } from "svelte/store";

  const updateResult = writable<string>("");

  function sendStateUpdates(stateNames: string[]) {
    trpc.updateState.subscribe(stateNames, {
      onData: (response: any) => updateResult.set(response.message),
    });
  }

  sendStateUpdates(["California", "Texas", "New York"]);
</script>

<div>
  <h1>Update State Result</h1>
  <p>{$updateResult}</p>
</div>
