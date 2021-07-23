import Principal from './lib/pages/Principal.svelte';
import Mensaje from './lib/pages/Mensaje.svelte';
import Formulario from './lib/pages/Formulario.svelte';
import Manifesto from './lib/pages/Manifesto.svelte';

export const routes = {
  '/': Principal,
  '/msg': Mensaje,
  '/formulario': Formulario,
  '/manifesto': Manifesto
};
