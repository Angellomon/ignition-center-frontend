<script>
  import { currentForm } from '../../stores';

  const handleClick = (num = 1) => {
    currentForm.set(num);
  };
  const forms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div>
  {#each forms as formNum}
    <span class:selected={$currentForm >= formNum} on:click={() => handleClick(formNum)} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 10px;
    cursor: pointer;
    margin: 0 4em;
  }
  span {
    height: 25px;
    width: 25px;
    background-color: #75c7ae;
    border-radius: 50%;
    display: inline-block;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
  .selected {
    background-color: #bed74b;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
</style>
