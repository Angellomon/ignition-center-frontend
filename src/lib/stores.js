import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

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

export const shouldAnimate = writable({
  presentarIdea: false
});

export const cursorPosition = spring(
  {
    x: -20,
    y: -20
  },
  {
    stiffness: 0.1,
    damping: 0.25
  }
);
