<script>
  import GrafoAgile from '../grafo/GrafoAgile.svelte';
  import ColWrap from './ColWrap.svelte';

  import { seccion } from '../../stores';
  import GrafoDesignThinking from '../grafo/GrafoDesignThinking.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>¿qué es design thinking?</h3>
  <GrafoDesignThinking bind:coords on:enter on:leave animation={$seccion === 'ver_iniciativas'} />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: white;
  }
</style>
