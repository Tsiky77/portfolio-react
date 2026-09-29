import { useLang } from '../../i18n/useLang';

export default function SportSection() {
  const { t, content } = useLang();
  const { natation } = content;
  return (
    <section id="natation" style={{ background: '#fbe9e7', padding: '96px 22px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#8b1a1a', textTransform: 'uppercase' }}>
          {t.sport.eyebrow}
        </p>
        <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
          {t.sport.title}
        </h2>
        <p style={{ maxWidth: 600, margin: '16px auto 0', fontSize: 17, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#7a5a5c' }}>
          {natation.club}. {t.sport.intro}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 18, maxWidth: 980, margin: '48px auto 0' }}>
        {natation.stats.map((stat) => (
          <div key={stat.valeur} style={{ padding: '26px 24px', borderRadius: 20, background: '#3b1519', color: '#fffcf5', textAlign: 'center' }}>
            <p style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.05, color: '#f4a9b4' }}>{stat.valeur}</p>
            <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.4, color: '#f0d6d6' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 980, margin: '64px auto 0', textAlign: 'center' }}>
        <h3 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#3b1519' }}>
          {t.sport.assetsTitle}
        </h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 18, maxWidth: 980, margin: '32px auto 0' }}>
        {natation.atouts.map((atout, index) => (
          <article key={atout.titre} style={{ padding: 24, border: '1px solid #ecd6cf', borderRadius: 20, background: '#fffcf5', boxShadow: '0 10px 30px rgba(0,0,0,0.035)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#a8918f', letterSpacing: '0.04em' }}>0{index + 1}</span>
            <h4 style={{ margin: '12px 0 10px', fontSize: 18, fontWeight: 600, letterSpacing: '-0.374px', color: '#3b1519' }}>{atout.titre}</h4>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: '#553437' }}>{atout.texte}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
