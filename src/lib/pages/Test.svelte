<script>
  import { spring } from 'svelte/motion';
  import Nodo from '../components/grafo/Nodo.svelte';
  import GrafoPresentar from '../components/grafo/GrafoPresentar.svelte';

  let shouldMove = true;

  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );

  let size = spring(10);

  const handleEnter = () => {
    shouldMove = false;
  };
  const handleLeave = () => {
    shouldMove = true;
  };
</script>

<div
  on:mousemove={(e) => shouldMove && coords.set({ x: e.offsetX, y: e.offsetY })}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)}
  class="container"
>
  <GrafoPresentar bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />

  <svg>
    <circle cx={$coords.x} cy={$coords.y} r={$size} />
  </svg>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
  svg {
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  circle {
    fill: #ff3e00;
  }
</style>
