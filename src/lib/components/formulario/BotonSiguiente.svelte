<script>
  import { currentForm } from '../../stores';

  const handleClick = () => {
    currentForm.update((current) => current + 1);
  };
</script>

<button on:click={handleClick}>siguiente ></button>

<style>
  button {
    border: none;
    color: white;
    background-color: #c3d662;
    font-weight: bold;
    font-size: 1em;
    margin-top: 10px;
    cursor: pointer;
  }
  button::after {
    content: '>';
  }
</style>
