<script>
  import GrafoConoceElProceso from '../grafo/GrafoConoceElProceso.svelte';
  import ColWrap from './ColWrap.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>conoce el proceso</h3>
  <GrafoConoceElProceso bind:coords on:enter on:leave />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: white;
  }
</style>
