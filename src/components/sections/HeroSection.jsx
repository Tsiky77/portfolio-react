import { CV_PATH } from '../../data/portfolioData';

export default function HeroSection({ goTo }) {
  return (
    <section id="top" className="apple-hero">
      <div className="apple-hero__glow apple-hero__glow--one" aria-hidden="true" />
      <div className="apple-hero__glow apple-hero__glow--two" aria-hidden="true" />
      <div className="apple-hero__content">
        <p className="apple-eyebrow apple-hero__eyebrow">Portfolio</p>
        <h1>Tsiky<br />Andrianarisata.</h1>
        <p className="apple-hero__lede">
          Hardware & software,<br className="desktop-break" /> pensés pour le réel.
        </p>
        <p className="apple-hero__description">
          Étudiant en Licence L2 EEA Électronique, Énergie Électrique et Automatique (CUPGE) 
        </p>
        <div className="apple-hero__actions">
          <a href={CV_PATH} download className="apple-button apple-button--primary">Télécharger le CV <span aria-hidden="true">↓</span></a>
          <button type="button" onClick={() => goTo('contact')} className="apple-button apple-button--quiet">Me contacter <span aria-hidden="true">→</span></button>
        </div>
        <div className="apple-hero__availability">
          <span aria-hidden="true" /> À la recherche d’une expérience professionnelle dans le cadre de mon parcours académique
        </div>
      </div>
      <div className="apple-hero__stage" aria-hidden="true">
        <div className="apple-hero__orb" />
        <div className="apple-hero__panel apple-hero__panel--top"><span>EEA</span><small>Électronique · Énergie · Automatique</small></div>
        <div className="apple-hero__panel apple-hero__panel--bottom"><span>01</span><small>Concevoir. Tester. Itérer.</small></div>
      </div>
    </section>
  );
}
