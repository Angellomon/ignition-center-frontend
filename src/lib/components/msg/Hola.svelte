<script>
  import { typewriter } from '../../transitions';
  import { push } from 'svelte-spa-router';

  export const onFinish = () => {
    setTimeout(() => {
      push('/formulario');
    }, 1000);
  };

  let holaVisible = true;
  let bienvendoVisible = false;
  let aVisible = false;
  let ignitionCenterVisible = false;
</script>

{#if holaVisible}
  <p
    in:typewriter
    on:introend={() => {
      setTimeout(() => {
        holaVisible = false;
        bienvendoVisible = true;
      }, 500);
    }}
  >
    hola
  </p>
{/if}

{#if bienvendoVisible}
  <p
    in:typewriter
    on:introend={() => {
      setTimeout(() => {
        aVisible = true;
        bienvendoVisible = false;
        ignitionCenterVisible = false;
      }, 500);
    }}
  >
    bienvenid@
  </p>
{/if}

{#if aVisible}
  <p
    in:typewriter
    on:introend={() => {
      setTimeout(() => {
        aVisible = false;
        ignitionCenterVisible = true;
      }, 500);
    }}
  >
    a
  </p>
{/if}

{#if ignitionCenterVisible}
  <p in:typewriter on:introend={onFinish}>ignition center</p>
{/if}

<style>
  p {
    margin: 0;
    align-self: center;
    color: #75c7ae;
    font-size: 2em;
  }
</style>
