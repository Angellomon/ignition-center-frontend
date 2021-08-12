import Principal from './lib/pages/Principal.svelte';
import Mensaje from './lib/pages/Mensaje.svelte';
import Formulario from './lib/pages/Formulario.svelte';
import Manifesto from './lib/pages/Manifesto.svelte';
import Test from './lib/pages/Test.svelte';
import Info from './lib/pages/Info.svelte';

export const routes = {
  '/': Principal,
  '/msg': Mensaje,
  '/formulario': Formulario,
  '/manifesto': Manifesto,
  '/test': Test,
  '/info': Info
};
