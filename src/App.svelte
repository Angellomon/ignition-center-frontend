<script>
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
</script>

<main>
  <Router {routes} />
</main>

<style>
  @font-face {
    font-family: Invention;
    src: url('/fonts/Invention_W_Lt.woff2');
    font-weight: normal;
  }
  :root {
    font-family: 'Invention', sans-serif;
  }
</style>
