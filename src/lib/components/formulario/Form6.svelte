<script>
  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
  import TituloForm from './TituloForm.svelte';
  import { formValues } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';
</script>

<FromContainer>
  <TituloForm>¿has recopilado o existen datos concretos que soporten tu idea?</TituloForm>
  <div>
    <Textarea bind:value={$formValues.recopilacionDatos} displayLabel={false} rows={5} />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  div {
    margin: 10% 20%;
  }
</style>
