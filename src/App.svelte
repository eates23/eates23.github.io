<script>
  import Info from "@/components/Info.svelte";
  import Links from "@/components/Links.svelte";
  import Projects from "@/components/Projects.svelte";
</script>

<div class="flex flex-col gap-2 px-[5%]">
  <div class="flex flex-wrap py-2 border-b-2 border-black mb-2">
    <Info />
  </div>
  <div class="flex flex-wrap gap-2 flex-col sm:flex-row">
    <div class="flex-1 border-l border-black">
      <Projects />
    </div>
    <div class="flex-1 border-l border-black">
      <Links />
    </div>
  </div>
</div>
