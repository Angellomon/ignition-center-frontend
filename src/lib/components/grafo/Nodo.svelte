<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let selected;

  export const pos = {
    x: 0,
    y: 0
  };

  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  const enter = () => dispatch('enter');
  const leave = () => dispatch('leave');

  const handleMouseOver = () => {
    enter();
    const pos1 = offset(selected);

    pos.x = pos1.left + 7.5;
    pos.y = pos1.top + 7.5;
  };
</script>

<div
  class="caja"
  on:mouseenter={() => handleMouseOver()}
  on:mouseleave={(event) => {
    leave();
  }}
>
  <span bind:this={selected} class="nodo" />
</div>

<style>
  div.caja {
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: relative;
  }
  span.nodo {
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }
</style>
