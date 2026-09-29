import { Link } from 'react-router-dom';
import { EMAIL } from '../data/portfolioData';

export default function Legal() {
  const year = new Date().getFullYear();

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#3b1519', height: 44, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 980, margin: '0 auto', padding: '0 22px', boxSizing: 'border-box' }}>
          <Link to="/" style={{ color: '#fffcf5', fontSize: 14, fontWeight: 600, letterSpacing: '-0.12px', textDecoration: 'none' }}>← Tsiky A.</Link>
        </div>
      </nav>
      <section style={{ background: '#fffcf5', padding: '80px 22px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 8px', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
            Mentions légales & confidentialité.
          </h1>
          <p style={{ margin: '0 0 48px', fontSize: 14, letterSpacing: '-0.224px', color: '#86696a' }}>Dernière mise à jour : {year}</p>

          <LegalBlock title="1. Éditeur du site">
            <p style={pStyle}>Tsiky Andrianarisata</p>
            <p style={pStyle}>Étudiant CESI Toulouse, France</p>
            <p style={pStyle}>Contact : <a href={`mailto:${EMAIL}`} style={linkStyle}>{EMAIL}</a></p>
          </LegalBlock>

          <LegalBlock title="2. Hébergement">
            <p style={pStyle}>GitHub Pages, GitHub, Inc.</p>
            <p style={pStyle}>88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</p>
            <p style={pStyle}>
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" style={linkStyle} target="_blank" rel="noopener noreferrer">
                Politique de confidentialité GitHub →
              </a>
            </p>
          </LegalBlock>

          <LegalBlock title="3. Données personnelles">
            <p style={pStyle}>
              Ce site ne collecte, ne stocke ni ne traite aucune donnée personnelle directement. Aucun outil
              d'analyse, script de suivi ou service publicitaire tiers n'est utilisé.
            </p>
            <p style={pStyle}>
              La seule donnée traitée est votre adresse e-mail si vous choisissez de me contacter via le
              formulaire ou le lien mailto. Cette donnée est utilisée uniquement pour répondre à votre message.
            </p>
          </LegalBlock>

          <LegalBlock title="4. Cookies">
            <p style={pStyle}>
              Ce site n'utilise pas de cookies de marketing ou de suivi. GitHub Pages peut déposer des cookies
              techniques nécessaires au fonctionnement du service. Ces cookies ne nécessitent pas votre
              consentement au titre de l'exemption RGPD pour les cookies strictement nécessaires.
            </p>
          </LegalBlock>

          <LegalBlock title="5. Vos droits (RGPD)">
            <p style={pStyle}>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit
              d'accès, de rectification, d'effacement et d'opposition au traitement de vos données personnelles.
              Pour exercer ces droits, contactez :
            </p>
            <p style={pStyle}><a href={`mailto:${EMAIL}`} style={linkStyle}>{EMAIL}</a></p>
            <p style={pStyle}>
              Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle (CNIL) :{' '}
              <a href="https://www.cnil.fr" style={linkStyle} target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </LegalBlock>

          <LegalBlock title="6. Propriété intellectuelle">
            <p style={pStyle}>
              Tout le contenu de ce site (textes, design, code) est la propriété exclusive de Tsiky Andrianarisata
              © {year}. Toute reproduction sans accord préalable écrit est interdite.
            </p>
          </LegalBlock>
        </div>
      </section>
    </>
  );
}

function LegalBlock({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#3b1519' }}>{title}</h3>
      {children}
    </div>
  );
}

const pStyle = { margin: '0 0 4px', fontSize: 15, lineHeight: 1.6, color: '#4a2a2d' };
const linkStyle = { color: '#8b1a1a' };
