<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo-presentar">
  <Nodo bind:pos={coords} on:enter on:leave darkblue />
  <div class="arista" />
  <Nodo bind:pos={coords} on:enter on:leave darkblue />
  <div class="arista" />
  <Nodo bind:pos={coords} on:enter on:leave darkblue />
  <div class="arista" />
  <Nodo bind:pos={coords} on:enter on:leave darkblue />
</div>

<style>
  .arista {
    width: 2px;
    background-color: #13213d;
    height: 40px;
    margin-top: -20px;
    margin-bottom: -20px;
    margin-left: 22px;
  }
  .grafo-presentar {
    margin: 50px;
    position: absolute;
  }
</style>
