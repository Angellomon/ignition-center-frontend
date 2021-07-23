<script>
  import { fade } from 'svelte/transition';
</script>

<section transition:fade>
  <slot />
</section>

<style>
  section {
    background-color: #c3d662;
    display: flex;
    flex-direction: column;
    padding: 3% 10%;
  }
</style>
