import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../../data/portfolioData';

export default function ContactSection() {
  function sendMessage(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent('Contact portfolio : ' + f.get('nom'));
    const body = encodeURIComponent(f.get('message') + '\n\n' + f.get('nom') + ' · ' + f.get('email'));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" style={{ background: '#fffcf5', padding: '96px 22px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
        Travaillons ensemble.
      </h2>
      <p style={{ margin: '14px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px', color: '#3b1519' }}>
        Étudiant en Licence L2 EEA (CUPGE), ouvert aux opportunités en systèmes embarqués et développement logiciel.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
        <a href={`mailto:${EMAIL}`} style={primaryPillStyle}>{EMAIL}</a>
        <a href={`tel:${PHONE_HREF}`} style={outlinePillStyle}>{PHONE_DISPLAY}</a>
      </div>
      <form onSubmit={sendMessage} style={{ maxWidth: 560, margin: '48px auto 0', background: '#fffcf5', border: '1px solid #ecd6cf', borderRadius: 18, padding: 32, display: 'grid', gap: 16, textAlign: 'left' }}>
        <p style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#3b1519' }}>Envoyer un message</p>
        <input name="nom" required placeholder="Votre nom" style={inputStyle} />
        <input name="email" type="email" required placeholder="Votre e-mail" style={inputStyle} />
        <textarea name="message" required rows={5} placeholder="Votre message" style={textareaStyle} />
        <button type="submit" style={submitStyle}>Envoyer</button>
      </form>
    </section>
  );
}

const primaryPillStyle = { background: '#8b1a1a', color: '#fffcf5', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, textDecoration: 'none' };
const outlinePillStyle = { background: 'transparent', color: '#8b1a1a', border: '1px solid #8b1a1a', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, textDecoration: 'none' };
const inputStyle = { fontFamily: 'inherit', fontSize: 17, letterSpacing: '-0.374px', color: '#3b1519', background: '#fffcf5', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 9999, padding: '12px 20px', height: 44, boxSizing: 'border-box', outline: 'none' };
const textareaStyle = { fontFamily: 'inherit', fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px', color: '#3b1519', background: '#fffcf5', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 18, padding: '14px 20px', resize: 'vertical', outline: 'none' };
const submitStyle = { fontFamily: 'inherit', background: '#8b1a1a', color: '#fffcf5', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, border: 'none', cursor: 'pointer', justifySelf: 'start' };