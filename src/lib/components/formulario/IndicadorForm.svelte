<script>
  import Titulo from '../Titulo.svelte';
  import Botones from './Botones.svelte';

  export let current = 0;
</script>

<aside>
  <span class="titulo">
    <Titulo />
  </span>
  <span class="numero">{current}</span>
  <Botones />
</aside>

<style>
  span.titulo {
    text-align: left;
    margin-right: 40%;
  }
  span.numero {
    font-size: 7.5em;
    color: #75c7ae;
    text-align: center;
    min-width: 100%;
    align-self: center;
    margin-top: 60%;
    margin-bottom: 18%;
  }
  aside {
    height: 100vh;
    display: flex;
    flex-grow: 1;
    width: 100%;
    flex-direction: column;
    background-color: white;
  }
</style>
