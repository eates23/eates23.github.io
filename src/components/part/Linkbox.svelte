<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icon: "link" | "app" = "link";
  export let href = "";
</script>

<div class="flex pb-2">
  <span class="whitespace-nowrap leading-[32px]">--</span>
  <a
    class="block shadow-[3px_3px_rgba(0,0,0)] border border-black cursor-pointer flex-1 h-[32px] leading-[32px] hover:shadow-red-500 bg-white"
    {href}
    target="_blank"
  >
    <Icon {icon} class="h-[32px] float-left px-[1px]" />
    <span class="px-2 webkitbox border-l border-black">
      <slot />
    </span>
  </a>
</div>

<style lang="scss">
  .webkitbox:first-of-type {
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
