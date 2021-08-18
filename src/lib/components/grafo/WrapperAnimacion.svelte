<script>
  import { onMount, onDestroy } from 'svelte';

  import { cursorPosition } from '../../stores';
  import { offset } from '../../utils';

  let posicionInicial, interval, grafo;

  export let grafoClass = 'grafo_presentar';
  export let shouldAnimate = false;
  export let offssetsPosiciones = [
    {
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: 50
    },
    {
      x: 0,
      y: 90
    },
    {
      x: 0,
      y: 140
    }
  ];

  const INICIO = 0,
    FIN = offssetsPosiciones.length - 1,
    TOP_OFFSET = 20,
    LEFT_OFFSET = 23;

  let etapa = INICIO;

  const actualizarPosicion = () => {
    if (!shouldAnimate) {
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

  onMount(() => {
    grafo = document.querySelector(grafoClass);
    if (!grafo) return;

    const pos = offset(grafo);

    pos.left += LEFT_OFFSET;
    pos.top += TOP_OFFSET;

    cursorPosition.set({
      x: pos.left,
      y: pos.top
    });
    posicionInicial = pos;

    // interval = setInterval(() => {
    //   siguienteEtapa();
    // }, 1500);
  });
  onDestroy(() => clearInterval(interval));

  $: if (!shouldAnimate) {
    clearInterval(interval);
  } else {
    actualizarPosicion();
    interval = setInterval(() => {
      actualizarPosicion();
    }, 1500);
  }
</script>

<div>
  <slot />
</div>

<style>
  div {
    margin: 0;
    padding: 0;
  }
</style>
