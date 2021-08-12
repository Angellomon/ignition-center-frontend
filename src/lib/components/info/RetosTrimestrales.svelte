<script>
  import GrafoRetosTrimestrales from '../grafo/GrafoRetosTrimestrales.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="wrap">
  <h3>retos trimestrales</h3>
  <div class="grafo">
    <GrafoRetosTrimestrales bind:coords on:enter on:leave />
  </div>
</div>

<style>
  h3 {
    text-align: center;
    color: white;
  }
  .grafo {
    margin-left: 35%;
  }
  .wrap {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    flex-direction: column;
    z-index: -1;
  }
</style>
