import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../i18n/useLang';
import { Reveal } from '../motion/Reveal';
import { EASE, pillSpring, viewport } from '../motion/presets';

export default function ProjectsSection({ filtre, setFiltre }) {
  const { t, content } = useLang();
  const { projetsData, projFilters, pedaleGallery, robotGallery } = content;
  const tp = t.projects;
  const projets = filtre === 'Tous' ? projetsData : projetsData.filter((p) => p.cat === filtre);

  return (
    <section id="projets" style={{ background: '#fbf7f0', padding: '96px 22px', textAlign: 'center' }}>
      <Reveal as="h2" style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#12343b' }}>
        {tp.title}
      </Reveal>
      <Reveal as="p" delay={0.08} style={{ margin: '14px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px', color: '#12343b' }}>
        {tp.subtitle}
      </Reveal>
      <Reveal delay={0.16} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
        {projFilters.map((label) => (
          <motion.button key={label} onClick={() => setFiltre(label)} whileTap={{ scale: 0.96 }} style={label === filtre ? filterActiveStyle : filterInactiveStyle}>
            {label === filtre && <motion.span layoutId="project-filter" transition={pillSpring} style={filterRingStyle} />}
            <span style={{ position: 'relative' }}>{tp.filters[label]}</span>
          </motion.button>
        ))}
      </Reveal>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 20, maxWidth: 980, margin: '40px auto 0', textAlign: 'left' }}>
        <AnimatePresence mode="popLayout">
          {projets.map((p) => (
            <motion.div
              key={p.titre}
              layout="position"
              className="project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6, boxShadow: '0px 18px 40px rgba(18,52,59,0.12)', transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, ease: EASE }}
              style={projectCardStyle}
            >
              <img className="project-card__img" src={p.imgSrc} alt={p.titre} style={{ width: '100%', aspectRatio: '16/10', height: 'auto', objectFit: 'cover', display: 'block', margin: '0 0 8px', flexShrink: 0 }} />
              <span style={{ padding: '0 24px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#227c8e', textTransform: 'uppercase' }}>{p.tag}</span>
              <h3 style={{ margin: 0, padding: '0 24px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#12343b' }}>{p.titre}</h3>
              <dl style={{ margin: '4px 0 0', padding: '0 24px', display: 'grid', gap: 10 }}>
                {[[tp.problem, p.probleme], [tp.solution, p.solution], [tp.result, p.resultat]].map(([label, texte]) => (
                  <div key={label}>
                    <dt style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#d2452a' }}>{label}</dt>
                    <dd style={{ margin: '2px 0 0', fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#2b4a51' }}>{texte}</dd>
                  </div>
                ))}
              </dl>
              {(p.github || p.video) && (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '4px 24px 0' }}>
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={projectLinkStyle}>{tp.code} ↗</a>}
                  {p.video && <a href={p.video} target="_blank" rel="noopener noreferrer" style={projectLinkStyle}>{tp.video} ▶</a>}
                </div>
              )}
              {p.imgCredit && (
                <p style={{ margin: 'auto 0 0', padding: '0 24px', fontSize: 11, color: '#9aa9a8' }}>
                  <a href={p.imgCreditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#9aa9a8' }}>{p.imgCredit}</a>
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Reveal as="h3" style={{ margin: '72px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#12343b' }}>
        {tp.pedalTitle}
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {pedaleGallery.map((im) => (
          <Reveal as="figure" key={im.src} className="gallery-figure" style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12, border: '1px solid #e4d8c5', overflow: 'hidden' }}>
              <img className="gallery__img" src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#6a8186', textAlign: 'center' }}>{im.cap}</figcaption>
          </Reveal>
        ))}
      </div>

      <Reveal as="h3" style={{ margin: '72px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#12343b' }}>
        {tp.robotTitle}
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {robotGallery.map((im) => (
          <Reveal as="figure" key={im.src} className="gallery-figure" style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12, border: '1px solid #e4d8c5', overflow: 'hidden' }}>
              <img className="gallery__img" src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#6a8186', textAlign: 'center' }}>
              {im.cap} · <a href={im.creditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#6a8186' }}>{im.credit}</a>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Le filtre actif est entouré par un anneau qui glisse (layoutId) d'un bouton à l'autre.
const filterBase = { position: 'relative', fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.224px', padding: '10px 18px', borderRadius: 9999, cursor: 'pointer', background: '#fbf7f0', color: '#12343b', border: '1px solid #e4d8c5' };
const filterActiveStyle = { ...filterBase, fontWeight: 600 };
const filterInactiveStyle = { ...filterBase, fontWeight: 400 };
const filterRingStyle = { position: 'absolute', inset: -1, borderRadius: 9999, border: '2px solid #1a6272' };
const projectCardStyle = { background: '#fbf7f0', border: '1px solid #e4d8c5', borderRadius: 18, padding: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden', boxShadow: '0px 0px 0px rgba(18,52,59,0)' };
const projectLinkStyle = { fontSize: 13, fontWeight: 600, color: '#227c8e', border: '1px solid #e4d8c5', borderRadius: 9999, padding: '6px 12px', textDecoration: 'none' };
