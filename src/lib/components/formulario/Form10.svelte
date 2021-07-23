<script>
  import { formValues } from '../../stores';
  import Switch from '../Switch.svelte';
  import BotonSiguiente from './BotonSiguiente.svelte';

  import FromContainer from './FromContainer.svelte';
  import BotonesFondeo from './inputs/BotonesFondeo.svelte';

  let value = false;
  let finished = false;

  $: formValues.update((values) => ({ ...values, requiereFondeo: value }));
  $: if (finished) {
    console.log($formValues);
  }
</script>

<FromContainer>
  <h1>¿qué te hace pensar que ésta es una verdadera oportunidad?</h1>
  <div>
    <BotonesFondeo />
  </div>
  <div class="finished">
    <span>dale on</span>
    <Switch bind:checked={finished} green={false} />
  </div>
</FromContainer>

<style>
  span {
    margin-right: 20px;
  }
  h1 {
    color: white;
    font-size: 2.9em;
    margin: 10px 5%;
    text-align: center;
  }
  div {
    margin: 15% 20% 0 20%;
  }
  .finished {
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
  }
</style>
