<script>
  import GrafoPresentar from '../grafo/GrafoPresentar.svelte';
  import ColWrap from './ColWrap.svelte';

  import { seccion } from '../../stores';
  import WrapperAnimacion from '../grafo/WrapperAnimacion.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>quiero presentar mi idea</h3>
  <WrapperAnimacion animation={$seccion === 'presentar_idea'} grafoClass=".grafo-presentar">
    <GrafoPresentar bind:coords on:enter on:leave />
  </WrapperAnimacion>
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: #13213d;
  }
</style>
