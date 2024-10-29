<script lang="ts">
  import trpc from "../lib/trpc/client";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const stateInfo = writable<string>("");

  async function fetchStateInfo(stateName: string) {
    const result = await trpc.getStateInfo.query(stateName);
    stateInfo.set(result.message);
  }

  onMount(() => {
    fetchStateInfo("California");
  });
</script>

<div>
  <h1>State Info</h1>
  <p>{$stateInfo}</p>
</div>
