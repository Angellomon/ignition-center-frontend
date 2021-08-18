<script>
  import { spring } from 'svelte/motion';
  import { onDestroy, onMount } from 'svelte';

  import PresentarIdea from '../components/info/PresentarIdea.svelte';
  import Requerimientos from '../components/info/Requerimientos.svelte';
  import QueEsIG from '../components/info/QueEsIG.svelte';
  import ConoceElProceso from '../components/info/ConoceElProceso.svelte';
  import Cursor from '../components/Cursor.svelte';
  import RetosTrimestrales from '../components/info/RetosTrimestrales.svelte';
  import MaterialApoyo from '../components/info/MaterialApoyo.svelte';

  import { seccion, cursorPosition, shouldAnimate, cursorSize } from '../stores';
  import VerIniciativas from '../components/info/VerIniciativas.svelte';
  import PropuestaValor from '../components/info/PropuestaValor.svelte';
  import Agile from '../components/info/Agile.svelte';
  import PreguntasFrecuentes from '../components/info/PreguntasFrecuentes.svelte';
  import Inspiracion from '../components/info/Inspiracion.svelte';
  import Scrum from '../components/info/Scrum.svelte';
  import DesignThinking from '../components/info/DesignThinking.svelte';

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

  const handleFocus = (e) => {
    if (document.visibilityState === 'hidden') {
      shouldAnimate.set(false);
    } else {
      shouldAnimate.set(true);
    }
  };

  onMount(() => {
    seccion.set('presentar_idea');
    window.addEventListener('visibilitychange', handleFocus);
  });

  onDestroy(() => {
    window.removeEventListener('visibilitychange', handleFocus);
  });
</script>

<div class="container">
  <div class="grid" on:mousedown={() => cursorSize.set(30)} on:mouseup={() => cursorSize.set(20)}>
    <div class="span-col-6">Ignition Center</div>
    <div on:mouseenter={() => seccion.set('presentar_idea')} class="span-col-3 span-row-2 white">
      <PresentarIdea bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-3 span-row-2 darkblue" style="min-height: 250px;">
      <Requerimientos bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div on:mouseenter={() => seccion.set('que_es')} class="span-col-2 span-row-2 darkblue">
      <QueEsIG bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="green" on:mouseenter={() => seccion.set('conoce_el_proceso')}>
      <ConoceElProceso bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-2 span-row-2 green">
      <RetosTrimestrales bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div>
      <MaterialApoyo bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="darkblue">
      <VerIniciativas bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="darkblue">
      <PropuestaValor bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-2 span-row-2 green">
      <Agile bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-2 darkblue">
      <PreguntasFrecuentes bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
    <div class="span-col-2 span-row-2 darkblue">
      <Inspiracion />
    </div>
    <div><Scrum bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} /></div>
    <div class="green">
      <DesignThinking bind:coords={$coords} on:enter={handleEnter} on:leave={handleLeave} />
    </div>
  </div>

  <Cursor x={$cursorPosition.x} y={$cursorPosition.y} />
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
    min-height: 150px;
  }
  div {
  }
</style>
