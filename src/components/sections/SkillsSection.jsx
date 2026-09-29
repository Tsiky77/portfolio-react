import { skills } from '../../data/portfolioData';

const cardStyles = [
  { accent: '#1f3a6e', tint: '#e8ecf4', icon: '</>' },
  { accent: '#7a5b12', tint: '#f8efd9', icon: '⌁' },
  { accent: '#3d5a8a', tint: '#e9eef6', icon: '◫' },
  { accent: '#2f5d7c', tint: '#e6eff3', icon: '↗' },
];

const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'B2' },
  { name: 'Espagnol', level: 'B2' },
  { name: 'Allemand', level: 'A2' },
];

export default function SkillsSection() {
  return (
    <section id="competences" style={{ background: '#f5efe2', padding: '96px 22px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#1f3a6e', textTransform: 'uppercase' }}>
          Savoir-faire
        </p>
        <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#14213d' }}>
          Compétences techniques.
        </h2>
        <p style={{ maxWidth: 570, margin: '16px auto 0', fontSize: 17, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#5f6680' }}>
          Un socle pluridisciplinaire, de la programmation à l’électronique, pour concevoir des solutions concrètes.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 18, maxWidth: 980, margin: '48px auto 0' }}>
        {skills.map((skill, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <article key={skill.titre} style={{ minHeight: 248, padding: 24, border: '1px solid #e6dccb', borderRadius: 20, background: '#fffcf5', boxShadow: '0 10px 30px rgba(0,0,0,0.035)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <span aria-hidden="true" style={{ width: 38, height: 38, borderRadius: 12, display: 'grid', placeItems: 'center', background: style.tint, color: style.accent, fontSize: style.icon === '</>' ? 14 : 23, fontWeight: 700, letterSpacing: '-1px' }}>
                  {style.icon}
                </span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#9a9585', letterSpacing: '0.04em' }}>0{index + 1}</span>
              </div>
              <h3 style={{ margin: '22px 0 16px', fontSize: 18, fontWeight: 600, letterSpacing: '-0.374px', lineHeight: 1.2, color: '#14213d' }}>{skill.titre}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                {skill.items.map((item) => (
                  <span key={item} style={{ padding: '7px 10px', borderRadius: 999, background: style.tint, color: '#2b3550', fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <aside style={{ maxWidth: 980, margin: '18px auto 0', padding: '22px 24px', borderRadius: 20, background: '#14213d', color: '#fffcf5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#f2c14e' }}>Langues</p>
          <p style={{ margin: '5px 0 0', fontSize: 16, fontWeight: 500 }}>Communiquer dans un contexte international.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {languages.map((language) => (
            <span key={language.name} style={{ padding: '8px 11px', border: '1px solid #3a4a6e', borderRadius: 10, fontSize: 13, lineHeight: 1.2, color: '#f5efe2' }}>
              <strong style={{ fontWeight: 600 }}>{language.name}</strong><span style={{ color: '#b9bfd0' }}> · {language.level}</span>
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
}
