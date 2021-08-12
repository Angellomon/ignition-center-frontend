<script>
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
</script>

<main>
  <Router {routes} />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  :root {
    font-family: 'Roboto', sans-serif;
  }
</style>
