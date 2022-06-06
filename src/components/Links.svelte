<script lang="ts">
  import Linkbox from "./part/Linkbox.svelte";
  import { storePage } from "@/store/store";
</script>

{#each $storePage.posts as { link, title }}
  <Linkbox href={link} {title}>{title}</Linkbox>
{/each}
