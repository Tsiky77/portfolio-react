import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { CV_PATH } from '../../data/portfolioData';
import { useLang } from '../../i18n/useLang';
import { EASE, stagger } from '../motion/presets';

const content = stagger(0.1, 0.15);
const rise = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};
const layerEntrance = (delay) => ({
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.3, ease: EASE, delay },
});

// Orbe et panneaux suivent légèrement le curseur, chacun avec sa profondeur.
function HeroStage({ h }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 55, damping: 18, mass: 0.7 };
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);

  const orbX = useTransform(x, (v) => v * -48);
  const orbY = useTransform(y, (v) => v * -48);
  const topX = useTransform(x, (v) => v * 34);
  const topY = useTransform(y, (v) => v * 34);
  const bottomX = useTransform(x, (v) => v * 20);
  const bottomY = useTransform(y, (v) => v * 20);

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
    function onMove(e) {
      pointerX.set(e.clientX / window.innerWidth - 0.5);
      pointerY.set(e.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduceMotion, pointerX, pointerY]);

  return (
    <div className="apple-hero__stage" aria-hidden="true">
      <motion.div className="apple-hero__layer" style={{ x: orbX, y: orbY }} {...layerEntrance(0.2)}>
        <div className="apple-hero__orb" />
      </motion.div>
      <motion.div className="apple-hero__layer" style={{ x: topX, y: topY }} {...layerEntrance(0.55)}>
        <div className="apple-hero__panel apple-hero__panel--top"><span>EEA</span><small>{h.panelTop}</small></div>
      </motion.div>
      <motion.div className="apple-hero__layer" style={{ x: bottomX, y: bottomY }} {...layerEntrance(0.75)}>
        <div className="apple-hero__panel apple-hero__panel--bottom"><span>{h.panelBottomValue}</span><small>{h.panelBottom}</small></div>
      </motion.div>
    </div>
  );
}

export default function HeroSection({ goTo }) {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="top" className="apple-hero">
      <div className="apple-hero__glow apple-hero__glow--one" aria-hidden="true" />
      <div className="apple-hero__glow apple-hero__glow--two" aria-hidden="true" />
      <motion.div className="apple-hero__content" variants={content} initial="hidden" animate="show">
        <motion.p variants={rise} className="apple-eyebrow apple-hero__eyebrow">{h.eyebrow}</motion.p>
        <h1>
          <motion.span variants={rise} className="apple-hero__line">Tsiky</motion.span>{' '}
          <motion.span variants={rise} className="apple-hero__line">Andrianarisata.</motion.span>
        </h1>
        <motion.p variants={rise} className="apple-hero__lede">
          {h.lede[0]}<br className="desktop-break" /> {h.lede[1]}
        </motion.p>
        <motion.p variants={rise} className="apple-hero__description">
          {h.description}
        </motion.p>
        <motion.div variants={rise} className="apple-hero__actions">
          <a href={CV_PATH} download className="apple-button apple-button--primary">{h.cv} <span aria-hidden="true">↓</span></a>
          <button type="button" onClick={() => goTo('contact')} className="apple-button apple-button--quiet">{h.contact} <span aria-hidden="true">→</span></button>
        </motion.div>
        <motion.div variants={rise} className="apple-hero__availability">
          <span aria-hidden="true" /> {h.availability}
        </motion.div>
      </motion.div>
      <HeroStage h={h} />
    </section>
  );
}
