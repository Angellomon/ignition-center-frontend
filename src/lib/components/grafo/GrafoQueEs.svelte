<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
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
