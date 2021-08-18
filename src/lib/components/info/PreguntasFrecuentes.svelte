<script>
  import GrafoPreguntasFrecuentes from '../grafo/GrafoPreguntasFrecuentes.svelte';
  import ColWrap from './ColWrap.svelte';

  import { seccion } from '../../stores';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>preguntas frecuentes</h3>
  <GrafoPreguntasFrecuentes
    bind:coords
    on:enter
    on:leave
    animation={$seccion === 'ver_iniciativas'}
  />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: white;
  }
</style>
