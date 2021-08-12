<script>
  import GrafoPresentar from '../grafo/GrafoPresentar.svelte';
  import ColWrap from './ColWrap.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>quiero presentar mi idea</h3>
  <GrafoPresentar bind:coords on:enter on:leave />
</ColWrap>

<style>
  h3 {
    text-align: center;
  }
</style>
