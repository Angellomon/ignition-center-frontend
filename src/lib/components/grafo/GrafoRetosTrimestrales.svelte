<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo">
  <Nodo bind:pos={coords} on:enter on:leave />
  <div class="arista" />
  <Nodo bind:pos={coords} on:enter on:leave />
  <span>
    <div class="arista-2" />
    <div class="nodo-2">
      <Nodo bind:pos={coords} on:enter on:leave />
    </div>
  </span>
</div>

<style>
  span {
    display: inline;
  }
  .nodo-2 {
    margin-top: -31px;
    margin-left: 55px;
  }
  .arista {
    width: 2px;
    background-color: rebeccapurple;
    height: 50px;
    margin-top: -20px;
    margin-bottom: -20px;
    margin-left: 22px;
  }
  .arista-2 {
    width: 2px;
    background-color: rebeccapurple;
    height: 50px;
    margin-top: -30px;
    margin-left: 50px;
    transform: rotate(-60deg);
  }
  .grafo {
    position: absolute;
  }
</style>
