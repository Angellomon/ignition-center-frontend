<script>
  import { spring } from 'svelte/motion';
  import { seccion } from '../stores';

  export let x = 0;
  export let y = 0;

  const size = spring(20);
</script>

<div
  on:click={() => console.log($seccion)}
  on:mousedown={() => size.set(35)}
  on:mouseup={() => size.set(20)}
  class="circle"
  style={`left: ${x - $size / 2}px; top: ${y - $size / 2}px; height: ${$size}px; width: ${$size}px`}
/>

<style>
  .circle {
    background-color: #bed74b;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    -webkit-box-shadow: 0px 0px 50px 15px #bed74b;
    box-shadow: 0px 0px 50px 15px #bed74b;
  }
</style>
