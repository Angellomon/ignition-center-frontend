<script>
  import ColWrap from './ColWrap.svelte';
  import GrafoQueEs from '../grafo/GrafoQueEs.svelte';
  import { seccion } from '../../stores';
  import WrapperAnimacion from '../grafo/WrapperAnimacion.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>¿qué es ignition center?</h3>
  <WrapperAnimacion
    grafoClass=".grafo-que-es"
    animation={$seccion === 'que_es'}
    offssetsPosiciones={[
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 50
      }
    ]}
  >
    <GrafoQueEs bind:coords on:enter on:leave />
  </WrapperAnimacion>
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: white;
  }
</style>
