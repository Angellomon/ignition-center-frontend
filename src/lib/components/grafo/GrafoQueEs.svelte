<script>
  import { onMount, onDestroy } from 'svelte';

  import Nodo from './Nodo.svelte';
  import { cursorPosition } from '../../stores';
  import { DURACION_ANIMACION, offset } from '../../utils';

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
    grafo = document.querySelector('.grafo-que-es');
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

<div class="grafo-que-es">
  <Nodo bind:pos={coords} on:enter on:leave />
  <div class="arista" />
  <Nodo bind:pos={coords} on:enter on:leave />
</div>

<style>
  .arista {
    width: 2px;
    background-color: white;
    height: 40px;
    margin-top: -20px;
    margin-bottom: -20px;
    margin-left: 22px;
  }
  .grafo-que-es {
    margin: 50px;
    position: absolute;
  }
</style>
