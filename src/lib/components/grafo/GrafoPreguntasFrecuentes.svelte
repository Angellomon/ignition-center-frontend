<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo-preguntas-frecuentes">
  <span class="nodo-1">
    <Nodo bind:pos={coords} on:enter on:leave />
  </span>
</div>

<style>
  .nodo-1 {
    margin-left: 0px;
    margin-top: -24px;
  }

  .grafo-preguntas-frecuentes {
    margin: 50px;
    position: absolute;
  }
</style>
