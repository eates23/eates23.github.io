<script lang="ts">
import Icon from "./Icon.svelte";

export let icon: "link"|"app" = "link";
export let href = "";
</script>

<div>
  <span class="line">--</span>
  <a class="link" href={href} target="_blank">
    <Icon icon={icon} className="icon"/>
    <span class="txt">
      <slot/>
    </span>
  </a>
</div>

<style lang="scss">
.link {
  --box-shadow-color: var(--black);

  border: 1px solid var(--black);
  box-shadow: var(--box-shadow-color) 3px 3px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  flex-grow: 1;
  height: 32px;
  line-height: 32px;
  overflow: hidden;

  &:hover {
    --box-shadow-color: var(--red);

    background-color: var(--whites);
  }
}

.txt {
  border-left: 1px solid var(--black);
  display: block;
  min-width: 0;
  overflow: hidden;
  padding: 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line {
  white-space: nowrap;
}

div {
  align-items: center;
  display: flex;
}

</style>
