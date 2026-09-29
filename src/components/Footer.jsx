import { Link } from 'react-router-dom';
import { EMAIL, PHONE_DISPLAY, CV_PATH, LINKEDIN } from '../data/portfolioData';
import { useLang } from '../i18n/useLang';

export default function Footer({ goTo }) {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer style={{ background: '#fbe9e7', borderTop: '1px solid #ecd6cf', padding: '64px 22px 120px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32 }}>
        <div>
          <h3 style={headingStyle}>{f.navigation}</h3>
          {['experience', 'projets', 'competences', 'natation', 'contact'].map((id) => [t.nav[id], id]).map(([label, id]) => (
            <p key={id} style={{ margin: 0, fontSize: 15, lineHeight: 2.1 }}>
              <button onClick={() => goTo(id)} style={linkBtnStyle}>{label}</button>
            </p>
          ))}
        </div>
        <div>
          <h3 style={headingStyle}>{f.contact}</h3>
          <p style={textLineStyle}><a href={`mailto:${EMAIL}`} style={{ color: '#4a2a2d' }}>{EMAIL}</a></p>
          <p style={textLineStyle}>{PHONE_DISPLAY}</p>
          <p style={textLineStyle}><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p style={textLineStyle}>{f.location}</p>
        </div>
        <div>
          <h3 style={headingStyle}>{f.documents}</h3>
          <p style={textLineStyle}><a href={CV_PATH} download>{f.cv}</a></p>
          <p style={textLineStyle}><Link to="/legal">{f.legal}</Link></p>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: '40px auto 0', paddingTop: 16, borderTop: '1px solid #ecd6cf', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <p style={fineprintStyle}>{f.fineprint}</p>
        <p style={fineprintStyle}>{f.updated}</p>
      </div>
    </footer>
  );
}

const headingStyle = { margin: '0 0 8px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#3b1519' };
const linkBtnStyle = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 15, color: '#4a2a2d' };
const textLineStyle = { margin: 0, fontSize: 15, lineHeight: 2.1, color: '#4a2a2d' };
const fineprintStyle = { margin: 0, fontSize: 12, lineHeight: 1.3, letterSpacing: '-0.12px', color: '#86696a' };
