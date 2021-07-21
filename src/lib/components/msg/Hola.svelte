<script>
  import { typewriter } from '../../transitions';
  import Emphasis from '../Emphasis.svelte';
  export const onFinish = () => {
    console.log('fin hola');
  };

  let bienvendoVisible = false;
  let aVisible = false;
  let ignitionCenterVisible = false;
</script>

<p
  in:typewriter
  on:introend={() => {
    bienvendoVisible = true;
  }}
>
  hola
</p>

{#if bienvendoVisible}
  <p
    in:typewriter
    on:introend={() => {
      aVisible = true;
    }}
  >
    bienvenid@
  </p>
{/if}

{#if aVisible}
  <p
    in:typewriter
    on:introend={() => {
      ignitionCenterVisible = true;
    }}
  >
    a
  </p>
{/if}

{#if ignitionCenterVisible}
  <p in:typewriter>ignition center</p>
{/if}

<style>
  p {
    margin: 0;
    align-self: center;
    color: #75c7ae;
    font-size: 2em;
  }
</style>
