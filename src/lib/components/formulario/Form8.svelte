<script>
  import { formValues } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';

  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
</script>

<FromContainer>
  <h1>¿te parece que se puede hacer una prueba de concepto de tu idea?</h1>
  <div>
    <Textarea bind:value={$formValues.pruebaIdea} displayLabel={false} rows={5} />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  h1 {
    color: white;
    font-size: 2.9em;
    margin: 10px 5%;
    text-align: center;
  }
  div {
    margin: 15% 20%;
  }
</style>
