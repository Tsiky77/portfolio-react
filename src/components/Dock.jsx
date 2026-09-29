import { useState } from 'react';
import { CV_PATH } from '../data/portfolioData';

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'experience', label: 'Expérience' },
  { id: 'formation', label: 'Formation' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

export default function Dock({ page, goTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navigateTo(id) {
    goTo(id);
    setIsMenuOpen(false);
  }

  return (
    <header className="site-navigation">
      <div className="site-navigation__bar">
        <button className="site-navigation__brand" onClick={() => navigateTo('accueil')} aria-label="Retour à l'accueil">
          <span>Tsiky.</span>
          <span className="site-navigation__role">Portfolio · EEA</span>
        </button>

        <nav className="site-navigation__links" aria-label="Navigation principale">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`site-navigation__link${page === item.id ? ' is-active' : ''}`}
              onClick={() => navigateTo(item.id)}
              aria-current={page === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a className="site-navigation__cv" href={CV_PATH} download>
          <span className="site-navigation__cv-label">Télécharger le CV</span>
          <span aria-hidden="true">↓</span>
        </a>

        <button
          className="site-navigation__menu-button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="site-navigation__mobile-menu" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`site-navigation__mobile-link${page === item.id ? ' is-active' : ''}`}
              onClick={() => navigateTo(item.id)}
              aria-current={page === item.id ? 'page' : undefined}
            >
              {item.label}
              <span aria-hidden="true">→</span>
            </button>
          ))}
          <a className="site-navigation__mobile-cv" href={CV_PATH} download onClick={() => setIsMenuOpen(false)}>
            Télécharger le CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      )}

      <style>{`
        .site-navigation {
          position: fixed;
          inset: 0 0 auto;
          z-index: 100;
          padding: 14px 22px;
          pointer-events: none;
        }
        .site-navigation__bar,
        .site-navigation__mobile-menu {
          width: min(1100px, 100%);
          margin: 0 auto;
          pointer-events: auto;
          background: rgba(255, 252, 245, 0.82);
          border: 1px solid rgba(59, 21, 25, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: saturate(180%) blur(18px);
          -webkit-backdrop-filter: saturate(180%) blur(18px);
        }
        .site-navigation__bar {
          min-height: 54px;
          padding: 6px 8px 6px 18px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .site-navigation__brand,
        .site-navigation__link,
        .site-navigation__menu-button {
          font-family: inherit;
          cursor: pointer;
        }
        .site-navigation__brand {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex: none;
          padding: 0;
          background: none;
          border: 0;
          color: #3b1519;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.45px;
        }
        .site-navigation__role {
          color: #7a5a5c;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: -0.1px;
        }
        .site-navigation__links {
          display: flex;
          justify-content: center;
          gap: 2px;
          flex: 1;
        }
        .site-navigation__link {
          padding: 8px 10px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: #5e3c3f;
          font-size: 13px;
          line-height: 1;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .site-navigation__link:hover,
        .site-navigation__link.is-active {
          background: #3b1519;
          color: #fffcf5;
        }
        .site-navigation__cv,
        .site-navigation__mobile-cv {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 10px;
          background: #8b1a1a;
          color: #fffcf5;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
        }
        .site-navigation__cv { padding: 11px 13px; }
        .site-navigation__menu-button { display: none; }
        .site-navigation__mobile-menu { display: none; }
        @media (max-width: 820px) {
          .site-navigation { padding: 10px 14px; }
          .site-navigation__bar { min-height: 50px; padding-left: 15px; }
          .site-navigation__links,
          .site-navigation__cv { display: none; }
          .site-navigation__menu-button {
            display: grid;
            place-content: center;
            gap: 5px;
            width: 38px;
            height: 38px;
            margin-left: auto;
            border: 1px solid #e2c5bf;
            border-radius: 10px;
            background: #fffcf5;
          }
          .site-navigation__menu-button span {
            width: 16px;
            height: 1.5px;
            border-radius: 2px;
            background: #3b1519;
            transition: transform 0.18s ease;
          }
          .site-navigation__mobile-menu {
            display: grid;
            gap: 4px;
            margin-top: 8px;
            padding: 8px;
            border-radius: 17px;
          }
          .site-navigation__mobile-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 12px 10px;
            border: 0;
            border-radius: 10px;
            background: transparent;
            color: #3b1519;
            font: 600 15px/1 inherit;
            text-align: left;
            cursor: pointer;
          }
          .site-navigation__mobile-link.is-active { background: #fbe4e6; color: #8b1a1a; }
          .site-navigation__mobile-cv { margin-top: 4px; padding: 13px; }
        }
        @media (max-width: 430px) {
          .site-navigation__role { display: none; }
        }
      `}</style>
    </header>
  );
}
