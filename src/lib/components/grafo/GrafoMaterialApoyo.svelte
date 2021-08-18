<script>
  import Nodo from './Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="grafo-material-apoyo">
  <div class="nodo-1">
    <Nodo bind:pos={coords} on:enter on:leave darkblue />
  </div>
  <div class="arista-1" />
  <div class="nodo-2">
    <Nodo bind:pos={coords} on:enter on:leave darkblue />
  </div>
  <div class="arista-2" />
  <span>
    <div class="nodo-3">
      <Nodo bind:pos={coords} on:enter on:leave darkblue />
    </div>
    <div class="arista-3" />
    <div class="nodo-4">
      <Nodo bind:pos={coords} on:enter on:leave darkblue />
    </div>
  </span>
</div>

<style>
  span {
    display: inline;
  }

  .nodo-1 {
    margin-top: 10px;
    margin-left: 10px;
  }

  .nodo-2 {
    margin-top: 7px;
    margin-left: 50px;
  }

  .nodo-3 {
    margin-top: -10px;
    margin-left: 95px;
  }

  .nodo-4 {
    margin-top: -23px;
    margin-left: 10px;
  }

  .arista-1 {
    width: 2px;
    background-color: #13213d;
    height: 2px;
    width: 40px;
    margin-top: -10px;
    margin-bottom: -20px;
    margin-left: 36px;
    transform: rotate(30deg);
  }

  .arista-2 {
    width: 2px;
    background-color: #13213d;
    height: 2px;
    width: 40px;
    margin-top: -10px;
    margin-left: 76px;
    transform: rotate(30deg);
  }

  .arista-3 {
    width: 2px;
    background-color: #13213d;
    height: 2px;
    width: 75px;
    margin-top: -23px;
    margin-left: 35px;
    z-index: -90;
  }

  .grafo-material-apoyo {
    margin-top: 30px;
    position: absolute;
  }
</style>
