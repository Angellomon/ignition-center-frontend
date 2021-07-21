<script>
  import { fade } from 'svelte/transition';
  import Hola from '../components/msg/Hola.svelte';
</script>

<section out:fade>
  <Hola />
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10em;
  }
</style>
