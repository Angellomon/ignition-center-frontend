<script>
  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
  import { formValues } from '../../stores';
  import TituloForm from './TituloForm.svelte';
  import BotonSiguiente from './BotonSiguiente.svelte';
</script>

<FromContainer>
  <TituloForm>
    ¿has identificado alguna otra oportunidad de desarrollar una solución innovadora?
  </TituloForm>
  <div>
    <Textarea bind:value={$formValues.solucionInovadora} displayLabel={false} rows={5} />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  div {
    margin: 10% 20%;
  }
</style>
