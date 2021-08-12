<script>
  import PresentarIdea from '../components/info/PresentarIdea.svelte';
  import Requerimientos from '../components/info/Requerimientos.svelte';
  import QueEsIG from '../components/info/QueEsIG.svelte';
  import ConoceElProceso from '../components/info/ConoceElProceso.svelte';
  import { spring } from 'svelte/motion';
  import Cursor from '../components/Cursor.svelte';
  import { seccion } from '../stores';
  import RetosTrimestrales from '../components/info/RetosTrimestrales.svelte';

  let shouldMove = true;

  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );

  const handleEnter = () => {
    shouldMove = false;
  };
  const handleLeave = () => {
    shouldMove = true;
  };
</script>

<div class="container">
  <div class="grid" on:mousemove={(e) => shouldMove && coords.set({ x: e.pageX, y: e.pageY })}>
    <div class="span-col-6">Ignition Center</div>
    <div on:mouseenter={() => seccion.set('presentar_idea')} class="span-col-3 span-row-2 white">
      <PresentarIdea bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div on:mouseenter={() => seccion.set('requerimientos')} class="span-col-3 span-row-2 darkblue">
      <Requerimientos bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-2 span-row-2 darkblue">
      <QueEsIG bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="green">
      <ConoceElProceso bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-2 span-row-2 green">
      <RetosTrimestrales bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
    <div class="span-col-2 span-row-2">Item 10</div>
    <div class="span-col-2">Item 11</div>
    <div class="span-col-2 span-row-2">Item 12</div>
    <div>Item 13</div>
    <div>Item 14</div>
  </div>

  <Cursor x={$coords.x} y={$coords.y} />
</div>

<style>
  .white {
    background-color: white;
  }

  .darkblue {
    background-color: #13213d;
  }

  .green {
    background-color: #3a837c;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .container {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .span-col-6 {
    grid-column: span 6 / auto;
    height: 100%;
    width: 100%;
  }

  .span-col-3 {
    grid-column: span 3 / auto;
    height: 100%;
    width: 100%;
  }

  .span-col-2 {
    grid-column: span 2 / auto;
    height: 100%;
    width: 100%;
  }

  .span-row-2 {
    grid-row: span 2 / auto;
    height: 100%;
    width: 100%;
  }
</style>
