<script lang="ts">
import { onMount } from "svelte";

const userLang = navigator.language;

const worlds = {
  "en": "Hello, World!",
  "tr": "Ah yalan dünya..",
};

let hi = worlds["en"];

if (userLang == "tr") {
  hi = worlds["tr"];
}

let mounted = false;

const typewriter = (node, { speed = 200 }) => {
  const text = hi;
  const duration = text.length * speed;

  return {
    duration,
    tick: (t) => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
};

onMount(() => {
  mounted = true;
});

</script>

<div class="middle">
  <div>
    {#if mounted}
      <span class="typewriter" in:typewriter></span>
    {/if}
  </div>
</div>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap');

.middle {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.typewriter {
  animation: blink-caret 0.75s step-end infinite;
  border-right: 0.1em solid var(--red); /* The typwriter cursor */
  font-family: 'Waiting for the Sunrise', cursive;
  font-size: 72pt;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to { border-color: transparent; }
  50% { border-color: var(--red); }
}

</style>
