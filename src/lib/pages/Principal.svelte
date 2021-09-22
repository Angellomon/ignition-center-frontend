<script>
  import { fade } from 'svelte/transition';
  import Switch from '../components/Switch.svelte';
  import Titulo from '../components/Titulo.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { guardarClick, hizoClick } from '../utils';

  let on = false;
  let redirect = false;
  let click = false;
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
      guardarClick();
      window.location.href =
        'https://collaboration.merck.com/sites/SoFMexico/SitePages/ignitionCenter.aspx';
      // push('/info');
    }, 400);
  }

  $: if (click) {
    clearTimeout(timeout);
    clearTimeout(timeout2);
    window.location.href =
      'https://collaboration.merck.com/sites/SoFMexico/SitePages/ignitionCenter.aspx';
  }

  onMount(() => {
    click = hizoClick();
  });

  onDestroy(() => clearTimeout(timeout2));
</script>

<section class:on transition:fade>
  {#if !redirect}
    <span class="titulo">
      <Titulo {on} />
    </span>
    <span class="switch">
      <Switch bind:checked={on} />
    </span>

    {#if on}
      <div class="mensaje" transition:fade={{ duration: 400, delay: 200 }}>
        <p>powered by subsidiary of the future</p>
      </div>
    {:else}
      <span class="helper" transition:fade={{ duration: 250, delay: 300 }}> dale clic </span>
    {/if}
  {/if}
</section>

<style>
  span.titulo,
  span.switch,
  span.helper,
  div.mensaje {
    position: absolute;
  }

  span.titulo {
    top: 5%;
  }

  span.switch {
    bottom: 50%;
  }

  span.helper {
    color: white;
    text-align: center;
    bottom: 25%;
    align-self: center;
  }

  div.mensaje {
    bottom: 25%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #3a837c;
    min-width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    position: relative;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }

  p {
    color: #75c7ae;
    text-align: center;
    margin: 0;
    font-weight: bold;
  }

  .on {
    background-color: white;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
</style>
