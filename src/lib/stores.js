import { writable } from 'svelte/store';

export const stepForm = writable(0);

export const currentForm = writable(1);

export const toggles = writable({
  tendencia: false,
  frustracionOfrecimiento: false,
  frustracionCompetencia: false
});

export const formValues = writable({
  identificaciones: {
    tendencia: '',
    nuestraOferta: '',
    competencia: ''
  },
  solucionInovadora: '',
  formaDiferente: '',
  productoNuevo: '',
  recopilacionDatos: '',
  descripcion: '',
  pruebaIdea: '',
  oportunidadVerdadera: '',
  requiereFondeo: false
});

export const seccion = writable('');
