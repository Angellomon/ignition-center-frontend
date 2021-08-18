<script>
  import GrafoVerIniciativas from '../grafo/GrafoVerIniciativas.svelte';
  import ColWrap from './ColWrap.svelte';

  import { seccion } from '../../stores';
  import GrafoScrum from '../grafo/GrafoScrum.svelte';

  export let coords = {
    x: 0,
    y: 0
  };
</script>

<ColWrap>
  <h3>¿qué es scrum?</h3>
  <GrafoScrum bind:coords on:enter on:leave animation={$seccion === 'ver_iniciativas'} />
</ColWrap>

<style>
  h3 {
    text-align: center;
    color: #13213d;
  }
</style>
