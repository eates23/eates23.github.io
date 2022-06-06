<script lang="ts">
  import Linkbox from "./part/Linkbox.svelte";
  import { storePage } from "@/store/store";
</script>

{#each $storePage.projects as { link, name, title }}
  <Linkbox icon="app" href={link} title={name + " " + title}>
    <strong>{name}</strong>
    {title}
  </Linkbox>
{/each}
