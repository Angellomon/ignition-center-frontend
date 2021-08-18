<script>
  import { onMount, onDestroy } from 'svelte';

  import Nodo from './Nodo.svelte';
  import { cursorPosition } from '../../stores';
  import { offset, DURACION_ANIMACION } from '../../utils';

  export let coords = {
    x: 0,
    y: 0
  };

  export let animation = false;

  let posicionInicial;

  let interval;

  let grafo;

  const offssetsPosiciones = [
    {
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: 50
    }
  ];

  const INICIO = 0,
    FIN = offssetsPosiciones.length - 1,
    TOP_OFFSET = 20,
    LEFT_OFFSET = 23;

  let etapa = INICIO;

  const actualizarPosicion = () => {
    if (!animation) {
      // etapa = INICIO;
      return;
    }

    cursorPosition.set({
      x: posicionInicial.left + offssetsPosiciones[etapa].x,
      y: posicionInicial.top + offssetsPosiciones[etapa].y
    });

    if (etapa === FIN) {
      etapa = INICIO;
    } else {
      etapa += 1;
    }
  };

  const siguienteEtapa = () => {
    if (!animation) {
      etapa = INICIO;
      return;
    }

    actualizarPosicion();
  };

  onMount(() => {
    grafo = document.querySelector('.grafo-ver-iniciativas');
    if (!grafo) return;

    const pos = offset(grafo);

    pos.left += LEFT_OFFSET;
    pos.top += TOP_OFFSET;

    // cursorPosition.set({
    //   x: pos.left,
    //   y: pos.top
    // });
    posicionInicial = pos;

    // interval = setInterval(() => {
    //   siguienteEtapa();
    // }, 1500);
    console.log('listo', animation);
  });
  onDestroy(() => clearInterval(interval));

  $: if (!animation) {
    clearInterval(interval);
  } else {
    actualizarPosicion();

    interval = setInterval(() => {
      actualizarPosicion();
    }, DURACION_ANIMACION);
  }
</script>

<div class="grafo-ver-iniciativas">
  <span class="nodo-1">
    <Nodo bind:pos={coords} on:enter on:leave />
  </span>
  <div class="arista" />
  <div class="nodo-2">
    <Nodo bind:pos={coords} on:enter on:leave />
  </div>
</div>

<style>
  .nodo-1 {
    margin-left: 70px;
    margin-top: -24px;
  }
  .nodo-2 {
    margin-left: 0px;
    margin-top: -24px;
    z-index: -99;
  }
  .arista {
    width: 2px;
    background-color: white;
    height: 2px;
    width: 70px;
    margin-top: -24px;
    margin-bottom: -20px;
    margin-left: 25px;
  }
  .grafo-ver-iniciativas {
    margin: 50px;
    position: absolute;
  }
</style>
