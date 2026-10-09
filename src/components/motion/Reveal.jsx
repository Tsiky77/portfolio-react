import { useEffect, useMemo, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { EASE, fadeUp, fadeUpWith, stagger, viewport } from './presets';

const tags = {
  div: motion.div,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  article: motion.article,
  figure: motion.figure,
  aside: motion.aside,
  form: motion.form,
};

// Apparition au scroll : fondu + légère montée.
export function Reveal({ as = 'div', delay = 0, children, ...rest }) {
  const Tag = tags[as];
  const variants = useMemo(() => (delay ? fadeUpWith(delay) : fadeUp), [delay]);
  return (
    <Tag variants={variants} initial="hidden" whileInView="show" viewport={viewport} {...rest}>
      {children}
    </Tag>
  );
}

// Conteneur dont les StaggerItem apparaissent l'un après l'autre.
// À réserver aux petites grilles : toute la grille se déclenche dès qu'elle entre à l'écran.
export function Stagger({ as = 'div', step = 0.08, delay = 0, children, ...rest }) {
  const Tag = tags[as];
  const variants = useMemo(() => stagger(step, delay), [step, delay]);
  return (
    <Tag variants={variants} initial="hidden" whileInView="show" viewport={viewport} {...rest}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = 'div', children, ...rest }) {
  const Tag = tags[as];
  return (
    <Tag variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}

// Sépare « ≈ 9 700 » en préfixe, nombre et suffixe. Les petits nombres (« < 1 % ») restent fixes.
function parseCountable(value) {
  const match = value.match(/\d{1,3}(?:[.,\s]\d{3})+|\d+/);
  if (!match) return null;
  const raw = match[0];
  const separator = /[^\d]/.exec(raw)?.[0] ?? '';
  const target = parseInt(raw.replace(/[^\d]/g, ''), 10);
  if (target < 10) return null;
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + raw.length),
    separator,
    target,
  };
}

function formatCount(n, separator) {
  return separator ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, separator) : String(n);
}

// Compte de 0 jusqu'à la valeur quand le chiffre devient visible.
export function CountUp({ value }) {
  const parts = useMemo(() => parseCountable(value), [value]);
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!parts || !inView || reduceMotion) return;
    const controls = animate(0, parts.target, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [parts, inView, reduceMotion]);

  if (!parts || reduceMotion) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      <span aria-hidden="true">{parts.prefix}{formatCount(current, parts.separator)}{parts.suffix}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
