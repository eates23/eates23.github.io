<script lang="ts">
import { onMount } from "svelte";
import Typewriter from "typewriter-effect/dist/core";
import Icon from "./part/Icon.svelte";

let text: HTMLSpanElement;

onMount(() => {
  const typewriter = new Typewriter(text, {
    loop: true,
  });

  typewriter.typeString("Hi there, I'm Eray")
    .pauseFor(2500)
    .deleteAll()
    .start();
});
</script>

<div>
  <span bind:this={text}/>
  <span class="socialw">
    <a href="https://www.linkedin.com/in/rytsh/" target="_blank" class="social">
      <Icon icon="linkedin" height=32 width=32/>
      <span>Linkedin</span>
    </a>
    <a href="https://github.com/rytsh" target="_blank" class="social">
      <Icon icon="github" height=32 width=32/>
      <span>Github</span>
    </a>
  </span>
</div>

<style lang="scss">
div {
  display: block;
  margin: auto 0;
  position: relative;
  text-align: center;
  width: 100%;
}

.blk {
  display: block;
}

.social {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
  justify-content: center;

  &:hover {
    color: var(--red);
    fill: var(--red);
  }
}

.socialw {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}
</style>