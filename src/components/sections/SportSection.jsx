import { useLang } from '../../i18n/useLang';
import { CountUp, Reveal, Stagger, StaggerItem } from '../motion/Reveal';

export default function SportSection() {
  const { t, content } = useLang();
  const { natation } = content;
  return (
    <section id="natation" style={{ background: '#f3eadc', padding: '96px 22px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
        <Reveal as="p" style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#227c8e', textTransform: 'uppercase' }}>
          {t.sport.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.08} style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#12343b' }}>
          {t.sport.title}
        </Reveal>
        <Reveal as="p" delay={0.16} style={{ maxWidth: 600, margin: '16px auto 0', fontSize: 17, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#5b7479' }}>
          {natation.club}. {t.sport.intro}
        </Reveal>
      </div>

      <Stagger step={0.12} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 18, maxWidth: 980, margin: '48px auto 0' }}>
        {natation.stats.map((stat) => (
          <StaggerItem
            key={stat.valeur}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            style={{ padding: '26px 24px', borderRadius: 20, background: '#12343b', color: '#fbf7f0', textAlign: 'center' }}
          >
            <p style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.05, color: '#ea7a5f' }}><CountUp value={stat.valeur} /></p>
            <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.4, color: '#e9e1d3' }}>{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal style={{ maxWidth: 980, margin: '64px auto 0', textAlign: 'center' }}>
        <h3 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#12343b' }}>
          {t.sport.assetsTitle}
        </h3>
      </Reveal>
      <Stagger step={0.1} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 18, maxWidth: 980, margin: '32px auto 0' }}>
        {natation.atouts.map((atout, index) => (
          <StaggerItem
            as="article"
            key={atout.titre}
            whileHover={{ y: -6, boxShadow: '0px 20px 44px rgba(18,52,59,0.12)', transition: { duration: 0.25 } }}
            style={{ padding: 24, border: '1px solid #e4d8c5', borderRadius: 20, background: '#fbf7f0', boxShadow: '0px 10px 30px rgba(0,0,0,0.035)' }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9aa9a8', letterSpacing: '0.04em' }}>0{index + 1}</span>
            <h4 style={{ margin: '12px 0 10px', fontSize: 18, fontWeight: 600, letterSpacing: '-0.374px', color: '#12343b' }}>{atout.titre}</h4>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: '#34545b' }}>{atout.texte}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
