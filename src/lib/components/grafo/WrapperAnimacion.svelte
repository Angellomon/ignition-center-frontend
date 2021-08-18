<script>
  import { onMount, onDestroy } from 'svelte';

  import { cursorPosition, shouldAnimate } from '../../stores';
  import { offset, DURACION_ANIMACION } from '../../utils';

  export let animation = false;
  export let topOffset = 20;
  export let leftOffset = 23;

  let posicionInicial, interval, grafo;

  export let grafoClass = 'grafo_presentar';
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
    FIN = offssetsPosiciones.length - 1;

  let etapa = INICIO;

  const actualizarPosicion = () => {
    if (!$shouldAnimate || !posicionInicial) {
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

    pos.left += leftOffset;
    pos.top += topOffset;

    posicionInicial = pos;
    console.log(pos);
  });
  onDestroy(() => clearInterval(interval));

  $: if (!animation || !$shouldAnimate) {
    clearInterval(interval);
  } else {
    actualizarPosicion();
    interval = setInterval(() => {
      actualizarPosicion();
    }, DURACION_ANIMACION);
  }
</script>

<slot />
