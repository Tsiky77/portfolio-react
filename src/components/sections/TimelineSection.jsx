import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../../i18n/useLang';
import { Reveal } from '../motion/Reveal';
import { fadeUp, stagger } from '../motion/presets';

const list = stagger(0.12, 0.15);

export default function TimelineSection({ goTo }) {
  const { t, content } = useLang();
  const { parcours } = content;
  const listRef = useRef(null);
  const inView = useInView(listRef, { once: true, margin: '0px 0px -12% 0px' });

  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <Reveal className="timeline__heading">
        <p className="apple-eyebrow">{t.timeline.eyebrow}</p>
        <h2 id="timeline-title">{t.timeline.title}</h2>
      </Reveal>

      {/* `is-in` déclenche le tracé de la ligne et l'apparition des points (voir index.css). */}
      <motion.ol
        ref={listRef}
        className={`timeline__list${inView ? ' is-in' : ''}`}
        variants={list}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {parcours.map((step, i) => (
          <motion.li
            key={step.date}
            variants={fadeUp}
            className={`timeline__step timeline__step--${step.statut}`}
            style={{ '--i': i }}
          >
            <span className="timeline__dot" aria-hidden="true" />
            <button type="button" className="timeline__card" onClick={() => goTo(step.page)}>
              <span className="timeline__meta">
                <span className="timeline__date">{step.date}</span>
                {step.statut === 'actuel' && <span className="timeline__badge">{t.timeline.current}</span>}
              </span>
              <span className="timeline__title">{step.titre}</span>
              <span className="timeline__place">{step.lieu}</span>
              <span className="timeline__type">{step.type}</span>
            </button>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
