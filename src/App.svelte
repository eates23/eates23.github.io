<script>
// import Canvas from "@/components/Canvas.svelte";
import Info from "@/components/Info.svelte";
import Links from "@/components/Links.svelte";
import Projects from "@/components/Projects.svelte";
</script>

<div class="main">
  <div class="top">
    <!-- <div class="canvas">
      <Canvas/>
    </div> -->
    <div class="info">
      <Info/>
    </div>
  </div>
  <div class="bottom">
    <div class="projects">
      <Projects/>
    </div>
    <div class="links">
      <Links/>
    </div>
  </div>
</div>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 5%;
}

.top,
.bottom {
  display: flex;
  flex-wrap: wrap;
}

.top {
  border-bottom: 2px solid var(--black);
  margin-bottom: 10px;
  padding: 10px 0;
}

.canvas {
  flex-basis: 0;
  flex-grow: 1;
  height: 280px;
  width: 100%;
}

.info {
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 280px;
}

.projects,
.links {
  border-left: 1px solid var(--black);
  flex-basis: 0;
  flex-grow: 1;
  min-width: 280px;
}

.bottom {
  gap: 10px;
}

</style>
