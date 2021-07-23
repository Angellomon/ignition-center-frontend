<script>
  export let checked = false;
  // export let color = "#bed74b";

  export let green = true;
</script>

<label class="switch">
  <input type="checkbox" bind:checked />
  <span class={green ? 'slider green' : 'slider blue'} />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    align-self: center;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .green {
    background-color: #bed74b;
  }

  input:checked + .green {
    box-shadow: 0 0 1px #bed74b;
  }

  input:checked + .blue {
    background-color: #75c7ae;
  }

  input:checked + .blue {
    box-shadow: 0 0 1px #75c7ae;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>
