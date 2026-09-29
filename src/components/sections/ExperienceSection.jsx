import { experiences } from '../../data/portfolioData';

export default function ExperienceSection({ expIndex, setExpIndex }) {
  const exp = experiences[expIndex];

  return (
    <section id="experience" style={{ background: '#3b1519', padding: '96px 22px', textAlign: 'center' }}>
      <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#f0d6d6', textTransform: 'uppercase' }}>Expérience</p>
      <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#fffcf5' }}>
        Expérience professionnelle.
      </h2>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
        {experiences.map((e, i) => (
          <button key={e.label} onClick={() => setExpIndex(i)} style={i === expIndex ? tabActiveStyle : tabInactiveStyle}>
            {e.label}
          </button>
        ))}
      </div>
      
      <p style={{ margin: '40px 0 0', fontSize: 21, fontWeight: 600, letterSpacing: '0.231px', color: '#fffcf5' }}>{exp.titre}</p>
      <p style={{ margin: '8px 0 0', fontSize: 14, letterSpacing: '-0.224px', color: '#f0d6d6' }}>{exp.meta}</p>
      
      <div style={{ maxWidth: 720, margin: '32px auto 0', textAlign: 'left', display: 'grid', gap: 20 }}>
        {/* Si l'expérience utilise des paragraphes classiques */}
        {exp.paras && exp.paras.map((pa, i) => (
          <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px', color: '#f0d6d6' }}>{pa}</p>
        ))}

        {exp.details && exp.details.length > 0 && (
          <div style={{ display: 'grid', gap: 20 }}>
            {exp.details.map((detail) => (
              <article key={detail.titre} style={{ paddingLeft: 18, borderLeft: '2px solid #86696a' }}>
                <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 600, color: '#fffcf5' }}>{detail.titre}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px', color: '#f0d6d6' }}>{detail.texte}</p>
              </article>
            ))}
          </div>
        )}
      </div>

      {exp.images && exp.images.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, maxWidth: 980, margin: '48px auto 0' }}>
          {exp.images.map((im) => (
            <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div
                role="img"
                aria-label={im.cap}
                style={{ width: '100%', aspectRatio: '1119/644', backgroundImage: `url("${im.src}")`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 8, boxShadow: 'rgba(0,0,0,0.22) 3px 5px 30px 0' }}
              />
              <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#f0d6d6', textAlign: 'center' }}>{im.cap}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

const chipBase = { fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.224px', padding: '10px 18px', borderRadius: 9999, cursor: 'pointer' };
const tabActiveStyle = { ...chipBase, background: '#fffcf5', color: '#3b1519', border: '1px solid #fffcf5', fontWeight: 600 };
const tabInactiveStyle = { ...chipBase, background: 'transparent', color: '#fffcf5', border: '1px solid #86696a', fontWeight: 400 };
