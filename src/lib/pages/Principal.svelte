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
      window.location.href =
        'https://collaboration.merck.com/sites/SoFMexico/SitePages/ignitionCenter.aspx';
      // push('/info');
    }, 400);
  }
  onDestroy(() => clearTimeout(timeout2));
</script>

<section class:on transition:fade>
  {#if !redirect}
    <span class="titulo">
      <Titulo />
    </span>
    <span class="switch">
      <Switch bind:checked={on} />
    </span>
    {#if on}
      <div class="mensaje">
        <p transition:fade>Powered by Subsidiary</p>
        <p transition:fade>of the Future</p>
      </div>
    {/if}
  {/if}
</section>

<style>
  span.titulo,
  span.switch,
  div.mensaje {
    position: absolute;
  }

  span.titulo {
    top: 5%;
  }

  span.switch {
    bottom: 50%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #13213d;
    min-width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    position: relative;
  }

  p {
    color: #75c7ae;
    text-align: center;
    margin: 0;
    font-weight: bold;
  }

  div.mensaje {
    margin-top: 5em;
    bottom: 10%;
  }

  .on {
    background-color: white;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
</style>
