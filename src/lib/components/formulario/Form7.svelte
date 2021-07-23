<script>
  import { formValues } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';

  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
</script>

<FromContainer>
  <h1>
    ¿con respecto a tu idea, puedes describir a tu cliente modelo de manera que le asocies un
    nombre, lo que hace o imagen para asociarlo?
  </h1>
  <div>
    <Textarea bind:value={$formValues.descripcion} displayLabel={false} rows={5} />
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
