<script>
  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
  import TituloForm from './TituloForm.svelte';
  import { formValues } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';
</script>

<FromContainer>
  <TituloForm>¿es un proceso o producto totalmente nuevo?</TituloForm>
  <div>
    <Textarea bind:value={$formValues.productoNuevo} rows={5} displayLabel={false} />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  div {
    margin: 15% 20%;
  }
</style>
