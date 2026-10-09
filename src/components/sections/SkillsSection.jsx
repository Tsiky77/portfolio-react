import { useLang } from '../../i18n/useLang';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';

const cardStyles = [
  { accent: '#227c8e', tint: '#dcecef', icon: '</>' },
  { accent: '#d2452a', tint: '#f8e3dc', icon: '⌁' },
  { accent: '#1a6272', tint: '#e6f0f2', icon: '◫' },
  { accent: '#a8361f', tint: '#f6e4d9', icon: '↗' },
];

export default function SkillsSection() {
  const { t, content } = useLang();
  const { skills } = content;
  const s = t.skills;
  return (
    <section id="competences" style={{ background: '#f3eadc', padding: '96px 22px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
        <Reveal as="p" style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#227c8e', textTransform: 'uppercase' }}>
          {s.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.08} style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#12343b' }}>
          {s.title}
        </Reveal>
        <Reveal as="p" delay={0.16} style={{ maxWidth: 570, margin: '16px auto 0', fontSize: 17, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#5b7479' }}>
          {s.intro}
        </Reveal>
      </div>

      <Stagger step={0.1} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,230px),1fr))', gap: 18, maxWidth: 980, margin: '48px auto 0' }}>
        {skills.map((skill, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <StaggerItem
              as="article"
              key={skill.titre}
              className="skill-card"
              whileHover={{ y: -6, boxShadow: '0px 20px 44px rgba(18,52,59,0.12)', transition: { duration: 0.25 } }}
              style={{ minHeight: 248, padding: 24, border: '1px solid #e4d8c5', borderRadius: 20, background: '#fbf7f0', boxShadow: '0px 10px 30px rgba(0,0,0,0.035)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <span aria-hidden="true" className="skill-card__icon" style={{ width: 38, height: 38, borderRadius: 12, display: 'grid', placeItems: 'center', background: style.tint, color: style.accent, fontSize: style.icon === '</>' ? 14 : 23, fontWeight: 700, letterSpacing: '-1px' }}>
                  {style.icon}
                </span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#9aa9a8', letterSpacing: '0.04em' }}>0{index + 1}</span>
              </div>
              <h3 style={{ margin: '22px 0 16px', fontSize: 18, fontWeight: 600, letterSpacing: '-0.374px', lineHeight: 1.2, color: '#12343b' }}>{skill.titre}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                {skill.items.map((item) => (
                  <span key={item} className="skill-chip" style={{ padding: '7px 10px', borderRadius: 999, background: style.tint, color: '#2b4a51', fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal as="aside" style={{ maxWidth: 980, margin: '18px auto 0', padding: '22px 24px', borderRadius: 20, background: '#12343b', color: '#fbf7f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#ea7a5f' }}>{s.languagesLabel}</p>
          <p style={{ margin: '5px 0 0', fontSize: 16, fontWeight: 500 }}>{s.languagesText}</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {s.languages.map((language) => (
            <span key={language.name} style={{ padding: '8px 11px', border: '1px solid #2d5963', borderRadius: 10, fontSize: 13, lineHeight: 1.2, color: '#f3eadc' }}>
              <strong style={{ fontWeight: 600 }}>{language.name}</strong><span style={{ color: '#b9cfd3' }}> · {language.level}</span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
