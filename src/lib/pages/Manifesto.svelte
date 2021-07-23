<script>
  import { fade } from 'svelte/transition';
  import Emphasis from '../components/Emphasis.svelte';
  import Switch from '../components/Switch.svelte';
  import Titulo from '../components/Titulo.svelte';

  import { push } from 'svelte-spa-router';

  let timeout;

  let on = false;

  $: if (on) {
    timeout = setTimeout(() => {
      push('/formulario');
    }, 1000);
  } else {
    clearTimeout(timeout);
  }
</script>

<section in:fade>
  <div class="izquierdo">
    <span><Titulo /></span>
    <h1>manifesto</h1>
    <p>
      Bacon ipsum dolor amet picanha tenderloin sausage, salami tri-tip ham hock rump. Jerky cow
      turkey chuck biltong meatball turducken sausage jowl pancetta. Meatloaf shankle andouille,
      meatball sirloin pastrami porchetta turducken boudin biltong tail doner salami hamburger.
      Sirloin strip steak pork ribeye andouille. Shoulder doner bacon frankfurter flank rump
      hamburger tri-tip biltong shank pork pork chop buffalo. Tenderloin bresaola meatloaf, chuck
      andouille doner short loin kielbasa. Ribeye fatback porchetta leberkas alcatra capicola. Pig
      beef sausage cupim, landjaeger swine boudin short loin shank chuck shoulder short ribs. Ground
      round chislic jowl cupim, corned beef boudin frankfurter sirloin pig beef shankle strip steak
      pork belly pork loin. Cupim jowl ham hock sausage leberkas bacon pastrami shank. Landjaeger
      ground round strip steak, pork loin andouille filet mignon ribeye picanha tri-tip. Beef shank
      pork bacon, shoulder jowl pig kielbasa.
    </p>
  </div>
  <div class="derecho">
    <h2>
      iniciar c<Emphasis>on</Emphasis> el <br /> cuesti<Emphasis>on</Emphasis>ario
    </h2>
    <Switch bind:checked={on} />
  </div>
</section>

<style>
  h1 {
    color: #75c7ae;
    text-align: center;
    font-size: 2.7em;
  }
  h2 {
    color: white;
    margin-top: 25%;
    text-align: center;
    font-size: 2.7em;
  }
  p {
    text-align: center;
    margin: 0 80px;
    line-height: 1.7em;
  }
  span {
    float: left;
    margin-right: 80%;
  }
  .izquierdo {
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .derecho {
    background-color: #13213d;
    display: flex;
    flex-direction: column;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 3px;
    height: 100vh;
  }
</style>
