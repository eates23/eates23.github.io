<script lang="ts">
  let className = "";
  export let title = "title";

  export { className as class };
</script>

<div class={`${className + " "}border-l-2 border-black`}>
  <span class="title">{title}</span>
  <slot />
</div>
