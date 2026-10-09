// Réglages d'animation partagés par toutes les sections.
export const EASE = [0.22, 1, 0.36, 1];

// Les éléments se révèlent une seule fois, un peu avant d'entrer dans l'écran.
export const viewport = { once: true, margin: '0px 0px -70px 0px' };

// `delay` n'est écrit que s'il est non nul : un `delay: 0` explicite écraserait le décalage
// (stagger) que le parent impose à ses enfants.
export function fadeUpWith(delay = 0, y = 28) {
  return {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, ...(delay ? { delay } : {}) } },
  };
}

export const fadeUp = fadeUpWith();

export function stagger(step = 0.08, delay = 0) {
  return { hidden: {}, show: { transition: { staggerChildren: step, delayChildren: delay } } };
}

export const pillSpring = { type: 'spring', stiffness: 420, damping: 34 };
