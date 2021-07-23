<script>
  import Switch from '../Switch.svelte';
  import { toggles } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';
  import FromContainer from './FromContainer.svelte';

  $: console.log($toggles);
</script>

<FromContainer>
  <h1>¿haz identificado...</h1>

  <div class="pregunta">
    <p>alguna <b>tendencia</b> en rápido crecimiento que crees que podamos aprovechar?</p>
    <Switch bind:checked={$toggles.tendencia} green={false} />
  </div>
  <div class="pregunta">
    <p>
      algún problema o frustración recurrente que tu cliente experimenta con lo que le <b
        >ofrecemos</b
      > actualmente?
    </p>
    <Switch bind:checked={$toggles.frustracionOfrecimiento} green={false} />
  </div>
  <div class="pregunta">
    <p>
      algún problema o frustración recurrente que tu cliente experimenta con lo que le ofrece la <b
        >competencia</b
      >?
    </p>
    <Switch bind:checked={$toggles.frustracionCompetencia} green={false} />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 4em;
  }
  h1,
  p {
    color: white;
  }
  p {
    font-size: 1.2em;
    margin: 20px 1em;
    width: 80%;
  }
  b {
    text-decoration: underline;
  }
  div.pregunta {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 20em;
  }
</style>
