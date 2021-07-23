<script>
  import FromContainer from './FromContainer.svelte';
  import Textarea from './inputs/Textarea.svelte';
  import { formValues } from '../../stores';
  import BotonSiguiente from './BotonSiguiente.svelte';
  import TituloForm from './TituloForm.svelte';

  $: console.log($formValues);
</script>

<FromContainer>
  <TituloForm
    >si tus respuestas anteriores fueron afirmativas, favor de llenar el siguiente cuadro:</TituloForm
  >
  <div>
    <Textarea displayRestante={false} bind:value={$formValues.identificaciones.tendencia} />
    <Textarea
      displayRestante={false}
      label="nuestra oferta"
      bind:value={$formValues.identificaciones.nuestraOferta}
    />
    <Textarea
      displayRestante={false}
      label="competencia"
      bind:value={$formValues.identificaciones.competencia}
      rows={1}
    />
  </div>
  <BotonSiguiente />
</FromContainer>

<style>
  div {
    margin: 20px 20%;
  }
</style>
