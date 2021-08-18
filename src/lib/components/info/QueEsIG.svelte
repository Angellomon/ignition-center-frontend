<script>
  import ColWrap from './ColWrap.svelte';
  import GrafoQueEs from '../grafo/GrafoQueEs.svelte';
  import { seccion } from '../../stores';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>¿qué es ignition center?</h3>
  <GrafoQueEs bind:coords on:enter on:leave animation={$seccion === 'que_es'} />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: white;
  }
</style>
