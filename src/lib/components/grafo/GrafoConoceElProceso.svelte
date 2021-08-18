<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo-conoce-el-proceso">
  <span>
    <div class="nodo-1">
      <Nodo bind:pos={coords} on:enter on:leave />
    </div>
    <div class="arista-1" />
    <div class="nodo-2">
      <Nodo bind:pos={coords} on:enter on:leave />
    </div>
  </span>
  <div class="arista-2" />
  <div class="nodo-3">
    <Nodo bind:pos={coords} on:enter on:leave />
  </div>
</div>

<style>
  span {
    display: inline;
  }

  .nodo-1 {
    margin-top: -15px;
    margin-left: 0px;
  }
  .nodo-2 {
    margin-left: 70px;
    margin-top: -24px;
  }

  .nodo-3 {
    margin-left: 0px;
    margin-top: -3px;
  }

  .arista-1 {
    width: 2px;
    background-color: white;
    height: 2px;
    width: 70px;
    margin-top: -23px;
    margin-bottom: -20px;
    margin-left: 25px;
  }
  .arista-2 {
    width: 2px;
    background-color: white;
    height: 2px;
    width: 75px;
    margin-top: -3px;
    margin-left: 21px;
    transform: rotate(-30deg);
    z-index: -90;
  }
  .grafo-conoce-el-proceso {
    margin: 50px;
    position: absolute;
  }
</style>
