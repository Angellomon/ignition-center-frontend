<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo">
  <span>
    <Nodo bind:pos={coords} on:enter on:leave />
    <div class="arista" />
    <div class="offset-left">
      <Nodo bind:pos={coords} on:enter on:leave />
    </div>
  </span>
  <br />
  <span>
    <div class="offset-top">
      <Nodo bind:pos={coords} on:enter on:leave />
    </div>
    <div class="arista-2" />
  </span>
</div>

<style>
  span {
    display: inline;
  }
  .offset-left {
    margin-left: 70px;
    margin-top: -24px;
    z-index: -99;
  }
  .offset-top {
    margin-top: -25px;
    z-index: -99;
  }
  .arista {
    width: 2px;
    background-color: white;
    height: 2px;
    width: 70px;
    margin-top: -24px;
    margin-bottom: -20px;
    margin-left: 25px;
  }
  .arista-2 {
    width: 2px;
    background-color: white;
    height: 2px;
    width: 65px;
    margin-top: -40px;
    margin-left: 26px;
    transform: rotate(-30deg);
    z-index: -90;
  }
  .grafo {
    margin: 50px;
    position: absolute;
  }
</style>
