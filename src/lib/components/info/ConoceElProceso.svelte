<script>
  import { seccion } from '../../stores';

  import GrafoConoceElProceso from '../grafo/GrafoConoceElProceso.svelte';
  import WrapperAnimacion from '../grafo/WrapperAnimacion.svelte';
  import ColWrap from './ColWrap.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>conoce el proceso</h3>
  <WrapperAnimacion
    topOffset={8}
    leftOffset={23}
    grafoClass=".grafo-conoce-el-proceso"
    animation={$seccion === 'conoce_el_proceso'}
    offssetsPosiciones={[
      {
        x: 0,
        y: 0
      },
      {
        x: 70,
        y: 0
      },
      {
        x: 0,
        y: 40
      }
    ]}
  >
    <GrafoConoceElProceso bind:coords on:enter on:leave />
  </WrapperAnimacion>
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: white;
  }
</style>
