import { useLang } from '../../i18n/useLang';

export default function ExperienceSection({ expIndex, setExpIndex }) {
  const { t, content } = useLang();
  const { experiences } = content;
  const exp = experiences[expIndex];

  return (
    <section id="experience" style={{ background: '#12343b', padding: '96px 22px', textAlign: 'center' }}>
      <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#e9e1d3', textTransform: 'uppercase' }}>{t.experience.eyebrow}</p>
      <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#fbf7f0' }}>
        {t.experience.title}
      </h2>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
        {experiences.map((e, i) => (
          <button key={e.label} onClick={() => setExpIndex(i)} style={i === expIndex ? tabActiveStyle : tabInactiveStyle}>
            {e.label}
          </button>
        ))}
      </div>
      
      <p style={{ margin: '40px 0 0', fontSize: 21, fontWeight: 600, letterSpacing: '0.231px', color: '#fbf7f0' }}>{exp.titre}</p>
      <p style={{ margin: '8px 0 0', fontSize: 14, letterSpacing: '-0.224px', color: '#e9e1d3' }}>{exp.meta}</p>
      
      {exp.chiffres && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exp.chiffres.length},1fr)`, gap: 'clamp(8px,2vw,14px)', maxWidth: 980, margin: '32px auto 0' }}>
          {exp.chiffres.map((c) => (
            <div key={c.label} style={{ padding: 'clamp(12px,3vw,18px) clamp(8px,2vw,16px)', borderRadius: 16, border: '1px solid #2d5963', background: 'rgba(255, 252, 245, 0.04)' }}>
              <p style={{ margin: 0, fontSize: 'clamp(20px,5vw,28px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#ea7a5f' }}>{c.valeur}</p>
              <p style={{ margin: '6px 0 0', fontSize: 'clamp(11px,2.8vw,13px)', lineHeight: 1.4, color: '#e9e1d3' }}>{c.label}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ maxWidth: exp.details ? 980 : 720, margin: '32px auto 0', textAlign: 'left', display: 'grid', gap: 20 }}>
        {/* Si l'expérience utilise des paragraphes classiques */}
        {exp.paras && exp.paras.map((pa, i) => (
          <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px', color: '#e9e1d3' }}>{pa}</p>
        ))}

        {exp.details && exp.details.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: '24px 40px' }}>
            {exp.details.map((detail) => (
              <article key={detail.titre} style={{ paddingLeft: 18, borderLeft: '2px solid #6a8186' }}>
                <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 600, color: '#fbf7f0' }}>{detail.titre}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px', color: '#e9e1d3' }}>{detail.texte}</p>
              </article>
            ))}
          </div>
        )}
      </div>

      {exp.images && exp.images.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${exp.images.length >= 3 ? 260 : 320}px),1fr))`, gap: 24, maxWidth: 980, margin: '48px auto 0' }}>
          {exp.images.map((im) => (
            <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div
                role="img"
                aria-label={im.cap}
                style={{ width: '100%', aspectRatio: '1119/644', backgroundImage: `url("${im.src}")`, backgroundSize: im.diagramme ? 'contain' : 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: im.diagramme ? '#ffffff' : 'transparent', borderRadius: 8, boxShadow: 'rgba(0,0,0,0.22) 3px 5px 30px 0' }}
              />
              <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#e9e1d3', textAlign: 'center' }}>{im.cap}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

const chipBase = { fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.224px', padding: '10px 18px', borderRadius: 9999, cursor: 'pointer' };
const tabActiveStyle = { ...chipBase, background: '#fbf7f0', color: '#12343b', border: '1px solid #fbf7f0', fontWeight: 600 };
const tabInactiveStyle = { ...chipBase, background: 'transparent', color: '#fbf7f0', border: '1px solid #6a8186', fontWeight: 400 };
