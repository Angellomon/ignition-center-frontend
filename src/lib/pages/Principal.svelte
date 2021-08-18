<script>
  import { fade } from 'svelte/transition';
  import { push } from 'svelte-spa-router';
  import Switch from '../components/Switch.svelte';
  import Titulo from '../components/Titulo.svelte';
  import { onDestroy } from 'svelte';

  let on = false;
  let redirect = false;
  let timeout;
  let timeout2;

  $: if (on) {
    timeout = setTimeout(() => {
      redirect = true;
    }, 3000);
  } else {
    clearTimeout(timeout);
  }
  $: if (redirect) {
    clearTimeout(timeout);
    timeout2 = setTimeout(() => {
      // window.location.href =
      //   'https://collaboration.merck.com/sites/SoFMexico/SitePages/ignitionCenter.aspx';
      push('/info');
    }, 400);
  }
  onDestroy(() => clearTimeout(timeout2));
</script>

<section class:on>
  {#if !redirect}
    <div class="container" transition:fade>
      <Titulo />
      <Switch bind:checked={on} />
      {#if on}
        <div class="mensaje">
          <p transition:fade>Powered by Subsidiary</p>
          <p transition:fade>of the Future</p>
        </div>
      {/if}
    </div>
  {/if}
</section>

<style>
  p {
    color: #75c7ae;
    text-align: center;
    margin: 0;
    font-weight: bold;
  }
  div.mensaje {
    margin-top: 5em;
  }
  div.container {
    margin: 5em;
    padding: 5em;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #13213d;
    min-width: 100vw;
    min-height: 100vh;
  }
  .on {
    background-color: white;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
</style>
