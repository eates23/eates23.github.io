<script lang="ts">
  import Icon from "./part/Icon.svelte";
</script>

<div
  class="flex flex-wrap justify-between items-center mx-auto relative text-center w-full"
>
  <span class="">Hi there, I'm Eray</span>
  <span class="flex flex-wrap gap-1 justify-start cursor-pointer">
    <a href="https://www.linkedin.com/in/rytsh/" target="_blank" class="social">
      <Icon icon="linkedin" height="32" width="32" class="float-left" />
      <span class="px-2 leading-[32px]">Linkedin</span>
    </a>
    <a href="https://github.com/rytsh" target="_blank" class="social">
      <Icon icon="github" height="32" width="32" class="float-left" />
      <span class="px-2 leading-[32px]">Github</span>
    </a>
  </span>
</div>
