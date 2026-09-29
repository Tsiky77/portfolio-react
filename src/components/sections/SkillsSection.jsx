import { useLang } from '../../i18n/useLang';

const cardStyles = [
  { accent: '#8b1a1a', tint: '#fbe4e6', icon: '</>' },
  { accent: '#a8434b', tint: '#fdeeee', icon: '⌁' },
  { accent: '#7a1f2b', tint: '#f9e3e5', icon: '◫' },
  { accent: '#b5485a', tint: '#fbe8ec', icon: '↗' },
];

export default function SkillsSection() {
  const { t, content } = useLang();
  const { skills } = content;
  const s = t.skills;
  return (
    <section id="competences" style={{ background: '#fbe9e7', padding: '96px 22px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#8b1a1a', textTransform: 'uppercase' }}>
          {s.eyebrow}
        </p>
        <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
          {s.title}
        </h2>
        <p style={{ maxWidth: 570, margin: '16px auto 0', fontSize: 17, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#7a5a5c' }}>
          {s.intro}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,230px),1fr))', gap: 18, maxWidth: 980, margin: '48px auto 0' }}>
        {skills.map((skill, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <article key={skill.titre} style={{ minHeight: 248, padding: 24, border: '1px solid #ecd6cf', borderRadius: 20, background: '#fffcf5', boxShadow: '0 10px 30px rgba(0,0,0,0.035)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <span aria-hidden="true" style={{ width: 38, height: 38, borderRadius: 12, display: 'grid', placeItems: 'center', background: style.tint, color: style.accent, fontSize: style.icon === '</>' ? 14 : 23, fontWeight: 700, letterSpacing: '-1px' }}>
                  {style.icon}
                </span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#a8918f', letterSpacing: '0.04em' }}>0{index + 1}</span>
              </div>
              <h3 style={{ margin: '22px 0 16px', fontSize: 18, fontWeight: 600, letterSpacing: '-0.374px', lineHeight: 1.2, color: '#3b1519' }}>{skill.titre}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                {skill.items.map((item) => (
                  <span key={item} style={{ padding: '7px 10px', borderRadius: 999, background: style.tint, color: '#4a2a2d', fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <aside style={{ maxWidth: 980, margin: '18px auto 0', padding: '22px 24px', borderRadius: 20, background: '#3b1519', color: '#fffcf5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#f4a9b4' }}>{s.languagesLabel}</p>
          <p style={{ margin: '5px 0 0', fontSize: 16, fontWeight: 500 }}>{s.languagesText}</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {s.languages.map((language) => (
            <span key={language.name} style={{ padding: '8px 11px', border: '1px solid #6b2a30', borderRadius: 10, fontSize: 13, lineHeight: 1.2, color: '#fbe9e7' }}>
              <strong style={{ fontWeight: 600 }}>{language.name}</strong><span style={{ color: '#d9b3b5' }}> · {language.level}</span>
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
}
