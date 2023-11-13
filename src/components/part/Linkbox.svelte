<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icon: "link" | "app" = "link";
  export let href = "";
  export let title = "";
</script>

<div class="flex pb-2">
  <span class="whitespace-nowrap leading-[32px]">--</span>
  <a
    class="block hoverit border border-black cursor-pointer flex-1 h-[32px] leading-[32px] bg-white"
    {href}
    target="_blank"
    {title}
  >
    <Icon {icon} class="h-full float-left px-[1px]" />
    <span class="h-full px-2 webkitbox border-l border-black">
      <slot />
    </span>
  </a>
</div>
