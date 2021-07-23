<script>
  export let value;
  export let name = 'tendencia';
  export let label = 'tendencia';

  export let rows = 2;
  export let displayRestante = true;
  export let displayLabel = true;
  export let longitudPermitida = 200;
  let longitud = 0;

  $: longitud = value ? value.length : 0;
</script>

<label for={name}>
  {#if displayLabel}
    {label}:
  {/if}
  <textarea bind:value {name} {rows} maxlength={longitudPermitida} />
  {#if displayRestante}
    <span>{longitud} / {longitudPermitida}</span>
    <br />
  {/if}
</label>

<style>
  span {
    float: right;
    font-size: 0.8em;
  }
  textarea {
    background-size: 100% 31px;
    font-size: 1.5em;
    width: 100%;
    color: white;
    background-color: #c3d662;
    border: none;
    background-image: -moz-linear-gradient(
      #c3d662,
      #c3d662 30px,
      white 30px,
      white 31px,
      #c3d662 31px
    );
    background-image: -ms-linear-gradient(
      #c3d662,
      #c3d662 30px,
      white 30px,
      white 31px,
      #c3d662 31px
    );
    background-image: -o-linear-gradient(
      #c3d662,
      #c3d662 30px,
      white 30px,
      white 31px,
      #c3d662 31px
    );
    background-image: linear-gradient(#c3d662, #c3d662 30px, white 30px, white 31px, #c3d662 31px);
    /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); */
    line-height: 31px;
    resize: none;
  }
  label {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
  }
</style>
