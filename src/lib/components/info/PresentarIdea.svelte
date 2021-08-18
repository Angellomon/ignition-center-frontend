<script>
  import GrafoPresentar from '../grafo/GrafoPresentar.svelte';
  import ColWrap from './ColWrap.svelte';

  import { seccion } from '../../stores';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>quiero presentar mi idea</h3>
  <GrafoPresentar bind:coords on:enter on:leave animation={$seccion === 'presentar_idea'} />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: #13213d;
  }
</style>
