<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo-ver-iniciativas">
  <span class="nodo-1">
    <Nodo bind:pos={coords} on:enter on:leave darkblue />
  </span>
  <div class="arista" />
  <div class="nodo-2">
    <Nodo bind:pos={coords} on:enter on:leave darkblue />
  </div>
</div>

<style>
  .nodo-1 {
    margin-left: 70px;
    margin-top: -24px;
  }
  .nodo-2 {
    margin-left: 0px;
    margin-top: -24px;
    z-index: -99;
  }
  .arista {
    width: 2px;
    background-color: #13213d;
    height: 2px;
    width: 70px;
    margin-top: -24px;
    margin-bottom: -20px;
    margin-left: 25px;
  }
  .grafo-ver-iniciativas {
    margin: 50px;
    position: absolute;
  }
</style>
