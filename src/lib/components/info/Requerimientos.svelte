<script>
  import Nodo from '../grafo/Nodo.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<div class="wrap">
  <h3>¿qué necesito saber para presentar mi idea?</h3>
  <div class="bullet">
    <Nodo bind:pos={coords} on:enter on:leave />
    <p>vaya acorde a los pilares estratégicos</p>
  </div>
  <div class="bullet">
    <Nodo bind:pos={coords} on:enter on:leave />
    <p>busque una solución de negocio</p>
  </div>
  <div class="bullet">
    <Nodo bind:pos={coords} on:enter on:leave />
    <p>cumpla con los objetivos de la empresa</p>
  </div>
</div>

<style>
  h3 {
    text-align: center;
    color: white;
  }
  p {
    width: 100%;
    display: inline;
    margin: 0;
    color: white;
  }
  .bullet {
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
