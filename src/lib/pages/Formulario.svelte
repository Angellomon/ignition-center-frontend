<script>
  import Form1 from '../components/formulario/Form1.svelte';
  import Form10 from '../components/formulario/Form10.svelte';
  import Form2 from '../components/formulario/Form2.svelte';
  import Form3 from '../components/formulario/Form3.svelte';
  import Form4 from '../components/formulario/Form4.svelte';
  import Form5 from '../components/formulario/Form5.svelte';
  import Form6 from '../components/formulario/Form6.svelte';
  import Form7 from '../components/formulario/Form7.svelte';
  import Form8 from '../components/formulario/Form8.svelte';
  import Form9 from '../components/formulario/Form9.svelte';

  import IndicadorForm from '../components/formulario/IndicadorForm.svelte';

  import { currentForm } from '../stores';
</script>

<section>
  <IndicadorForm current={$currentForm} />
  {#if $currentForm == 1}
    <Form1 />
  {/if}
  {#if $currentForm == 2}
    <Form2 />
  {/if}
  {#if $currentForm == 3}
    <Form3 />
  {/if}
  {#if $currentForm == 4}
    <Form4 />
  {/if}
  {#if $currentForm == 5}
    <Form5 />
  {/if}
  {#if $currentForm == 6}
    <Form6 />
  {/if}
  {#if $currentForm == 7}
    <Form7 />
  {/if}
  {#if $currentForm == 8}
    <Form8 />
  {/if}
  {#if $currentForm == 9}
    <Form9 />
  {/if}
  {#if $currentForm == 10}
    <Form10 />
  {/if}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: #c3d662;
  }
</style>
