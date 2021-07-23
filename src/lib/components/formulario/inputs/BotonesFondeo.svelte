<script>
  export let value = true;
</script>

<div>
  <button
    class:selected={value}
    on:click={() => {
      value = true;
    }}>si</button
  >
  <button
    class:selected={!value}
    on:click={() => {
      value = false;
    }}>no</button
  >
</div>

<style>
  div {
    display: inline-flex;
    justify-content: center;
    align-self: center;
    width: 100%;
  }
  button {
    border: none;
    margin: 0 2px;
    background-color: white;
    padding: 20px 45px;
    color: #c3d662;
    cursor: pointer;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
  .selected {
    background-color: #75c7ae;
    color: white;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
</style>
