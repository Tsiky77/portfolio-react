import { CV_PATH } from '../../data/portfolioData';
import { useLang } from '../../i18n/useLang';

export default function HeroSection({ goTo }) {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="top" className="apple-hero">
      <div className="apple-hero__glow apple-hero__glow--one" aria-hidden="true" />
      <div className="apple-hero__glow apple-hero__glow--two" aria-hidden="true" />
      <div className="apple-hero__content">
        <p className="apple-eyebrow apple-hero__eyebrow">{h.eyebrow}</p>
        <h1>Tsiky<br />Andrianarisata.</h1>
        <p className="apple-hero__lede">
          {h.lede[0]}<br className="desktop-break" /> {h.lede[1]}
        </p>
        <p className="apple-hero__description">
          {h.description}
        </p>
        <div className="apple-hero__actions">
          <a href={CV_PATH} download className="apple-button apple-button--primary">{h.cv} <span aria-hidden="true">↓</span></a>
          <button type="button" onClick={() => goTo('contact')} className="apple-button apple-button--quiet">{h.contact} <span aria-hidden="true">→</span></button>
        </div>
        <div className="apple-hero__availability">
          <span aria-hidden="true" /> {h.availability}
        </div>
      </div>
      <div className="apple-hero__stage" aria-hidden="true">
        <div className="apple-hero__orb" />
        <div className="apple-hero__panel apple-hero__panel--top"><span>EEA</span><small>{h.panelTop}</small></div>
        <div className="apple-hero__panel apple-hero__panel--bottom"><span>{h.panelBottomValue}</span><small>{h.panelBottom}</small></div>
      </div>
    </section>
  );
}
