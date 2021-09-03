<script>
  import Emphasis from './Emphasis.svelte';

  export let on = false;
</script>

<h2 class:on>igniti<Emphasis>on</Emphasis><br /> center</h2>

<style>
  h2 {
    color: white;
    font-size: 2.9em;
    text-align: right;
    line-height: 2.7rem;
  }

  h2.on {
    color: #75c7ae;
  }
</style>
