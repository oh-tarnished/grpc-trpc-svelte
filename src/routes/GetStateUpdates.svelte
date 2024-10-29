<script lang="ts">
  import trpc from "../trpc/client";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const stateUpdates = writable<string[]>([]);

  function subscribeToStateUpdates(stateName: string) {
    trpc.getStateUpdates.subscribe(stateName, {
      onData: (update: any) =>
        stateUpdates.update((u) => [...u, update.updateInfo]),
    });
  }

  onMount(() => {
    subscribeToStateUpdates("California");
  });
</script>

<div>
  <h1>State Updates</h1>
  <ul>
    {#each $stateUpdates as update}
      <li>{update}</li>
    {/each}
  </ul>
</div>
