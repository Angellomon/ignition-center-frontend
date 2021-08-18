<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo-propuesta-valor">
  <span class="nodo-1">
    <Nodo bind:pos={coords} on:enter on:leave />
  </span>
  <div class="arista" />
  <span class="nodo-2">
    <Nodo bind:pos={coords} on:enter on:leave />
  </span>
</div>

<style>
  span.nodo-1 {
    margin-left: 4px;
    margin-top: 0px;
  }
  span.nodo-2 {
    margin-left: 4px;
    margin-top: 5px;
    position: absolute;
  }
  div.arista {
    width: 2px;
    background-color: white;
    height: 40px;
    width: 2px;
    margin-top: -15px;
    margin-bottom: -20px;
    margin-left: 25px;
  }
  .grafo-propuesta-valor {
    margin: 50px;
    position: absolute;
  }
</style>
