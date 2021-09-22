class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

class NoHayClick extends ExtendableError {}

export function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

export const DURACION_ANIMACION = 1000;

export const cargarClick = () => {
  const click = localStorage.getItem('click');

  if (!click) throw new NoHayClick('no hay click');

  return parseInt(click);
};

export const guardarClick = () => {
  localStorage.setItem('click', `${Date.now()}`);
};

const DURACION_CLICK = 7 * 60 * 60 * 1000;

export const esClickVencido = (click = 0) => {
  const hoy = Date.now();

  return hoy - click > DURACION_CLICK;
};

export const hizoClick = () => {
  try {
    const click = cargarClick();

    if (esClickVencido(click)) {
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};
