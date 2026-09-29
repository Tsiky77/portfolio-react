import { useLang } from '../../i18n/useLang';

export default function ProjectsSection({ filtre, setFiltre }) {
  const { t, content } = useLang();
  const { projetsData, projFilters, pedaleGallery, robotGallery } = content;
  const tp = t.projects;
  const projets = filtre === 'Tous' ? projetsData : projetsData.filter((p) => p.cat === filtre);

  return (
    <section id="projets" style={{ background: '#fffcf5', padding: '96px 22px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
        {tp.title}
      </h2>
      <p style={{ margin: '14px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px', color: '#3b1519' }}>
        {tp.subtitle}
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
        {projFilters.map((label) => (
          <button key={label} onClick={() => setFiltre(label)} style={label === filtre ? filterActiveStyle : filterInactiveStyle}>
            {tp.filters[label]}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 20, maxWidth: 980, margin: '40px auto 0', textAlign: 'left' }}>
        {projets.map((p) => (
          <div key={p.titre} style={{ background: '#fffcf5', border: '1px solid #ecd6cf', borderRadius: 18, padding: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
            <img src={p.imgSrc} alt={p.titre} style={{ width: '100%', aspectRatio: '16/10', height: 'auto', objectFit: 'cover', display: 'block', margin: '0 0 8px', flexShrink: 0 }} />
            <span style={{ padding: '0 24px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#8b1a1a', textTransform: 'uppercase' }}>{p.tag}</span>
            <h3 style={{ margin: 0, padding: '0 24px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#3b1519' }}>{p.titre}</h3>
            <dl style={{ margin: '4px 0 0', padding: '0 24px', display: 'grid', gap: 10 }}>
              {[[tp.problem, p.probleme], [tp.solution, p.solution], [tp.result, p.resultat]].map(([label, texte]) => (
                <div key={label}>
                  <dt style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#a8434b' }}>{label}</dt>
                  <dd style={{ margin: '2px 0 0', fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#4a2a2d' }}>{texte}</dd>
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
              <p style={{ margin: 'auto 0 0', padding: '0 24px', fontSize: 11, color: '#a8918f' }}>
                <a href={p.imgCreditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#a8918f' }}>{p.imgCredit}</a>
              </p>
            )}
          </div>
        ))}
      </div>

      <h3 style={{ margin: '72px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#3b1519' }}>
        {tp.pedalTitle}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {pedaleGallery.map((im) => (
          <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12, border: '1px solid #ecd6cf', overflow: 'hidden' }}>
              <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#86696a', textAlign: 'center' }}>{im.cap}</figcaption>
          </figure>
        ))}
      </div>

      <h3 style={{ margin: '72px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#3b1519' }}>
        {tp.robotTitle}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {robotGallery.map((im) => (
          <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12, border: '1px solid #ecd6cf', overflow: 'hidden' }}>
              <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#86696a', textAlign: 'center' }}>
              {im.cap} · <a href={im.creditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#86696a' }}>{im.credit}</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const filterBase = { fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.224px', padding: '10px 18px', borderRadius: 9999, cursor: 'pointer', background: '#fffcf5', color: '#3b1519' };
const filterActiveStyle = { ...filterBase, border: '2px solid #6e1212', fontWeight: 600 };
const filterInactiveStyle = { ...filterBase, border: '1px solid #ecd6cf', fontWeight: 400 };
const projectLinkStyle = { fontSize: 13, fontWeight: 600, color: '#8b1a1a', border: '1px solid #ecd6cf', borderRadius: 9999, padding: '6px 12px', textDecoration: 'none' };
