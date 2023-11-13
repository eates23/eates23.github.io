<script lang="ts">
  import Info from "@/components/Info.svelte";
  import Links from "@/components/Links.svelte";
  import Projects from "@/components/Projects.svelte";
  import Flag from "./components/Flag.svelte";

  import "@/helper/get";

  let innerWidth = window.innerWidth;

  let trigger = false;

  const eventWidth = (w: number) => {
    if (w <= 640 && !trigger) {
      trigger = true;
    } else if (w > 640 && trigger) {
      trigger = false;
    }
  };

  $: eventWidth(innerWidth);
</script>

<svelte:window bind:innerWidth />

<div class="h-full flex flex-col gap-2 px-[5%]">
  <div class="flex flex-wrap py-2 border-b-2 border-black mb-2">
    <Info />
  </div>
  <a
    class="py-1 px-2 border border-black bg-yellow-50 block hoverit"
    href="/wiki"
  >
    Personal Wiki
  </a>
  <div
    class={`flex flex-1 flex-wrap ${
      trigger ? "" : "gap-2 "
    }flex-col sm:flex-row`}
  >
    <Flag title="Projects" class={`${trigger ? "grow-0 " : ""}flex-1`}>
      <Projects />
    </Flag>
    <Flag title="Blog Posts" class="flex-1">
      <Links />
    </Flag>
  </div>
</div>
