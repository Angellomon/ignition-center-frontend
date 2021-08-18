<script>
  import GrafoMaterialApoyo from '../grafo/GrafoMaterialApoyo.svelte';
  import ColWrap from './ColWrap.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>material de apoyo</h3>
  <GrafoMaterialApoyo bind:coords on:enter on:leave />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: #13213d;
  }
</style>
