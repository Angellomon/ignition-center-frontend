<script>
  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
  import TituloForm from './TituloForm.svelte';
  import { formValues } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';
</script>

<FromContainer>
  <TituloForm>¿es una forma diferente dehacer algo que ya existe?</TituloForm>
  <div>
    <Textarea bind:value={$formValues.formaDiferente} displayLabel={false} rows={5} />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  div {
    margin: 15% 20%;
  }
</style>
