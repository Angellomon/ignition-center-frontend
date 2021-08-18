<script>
  import { cursorSize } from '../stores';

  export let x = 0;
  export let y = 0;
</script>

<div
  class="circle"
  style={`left: ${x - $cursorSize / 2}px; top: ${
    y - $cursorSize / 2
  }px; height: ${$cursorSize}px; width: ${$cursorSize}px`}
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
