<script>
  import { createEventDispatcher } from 'svelte';
  import { offset } from '../../utils';

  export let darkblue = false;

  const dispatch = createEventDispatcher();
  let selected;

  export const pos = {
    x: 0,
    y: 0
  };

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
  <span bind:this={selected} class={`nodo ${darkblue ? 'darkblue' : 'white'}`} />
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
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }

  .white {
    background-color: white;
  }

  .darkblue {
    background-color: #13213d;
  }
</style>
