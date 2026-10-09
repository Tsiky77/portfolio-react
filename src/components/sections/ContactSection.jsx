import { motion } from 'framer-motion';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, LINKEDIN } from '../../data/portfolioData';
import { useLang } from '../../i18n/useLang';
import { Reveal } from '../motion/Reveal';

const pillHover = { y: -3, scale: 1.03, transition: { duration: 0.2 } };
const pillTap = { scale: 0.97 };

export default function ContactSection() {
  const { t } = useLang();
  const c = t.contact;

  function sendMessage(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(c.subject + f.get('nom'));
    const body = encodeURIComponent(f.get('message') + '\n\n' + f.get('nom') + ' · ' + f.get('email'));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" style={{ background: '#fbf7f0', padding: '96px 22px', textAlign: 'center' }}>
      <Reveal as="h2" style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#12343b' }}>
        {c.title}
      </Reveal>
      <Reveal as="p" delay={0.08} style={{ margin: '14px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px', color: '#12343b' }}>
        {c.subtitle}
      </Reveal>
      <Reveal delay={0.16} style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
        <motion.a href={`mailto:${EMAIL}`} whileHover={pillHover} whileTap={pillTap} style={primaryPillStyle}>{EMAIL}</motion.a>
        <motion.a href={`tel:${PHONE_HREF}`} whileHover={pillHover} whileTap={pillTap} style={outlinePillStyle}>{PHONE_DISPLAY}</motion.a>
        <motion.a href={LINKEDIN} target="_blank" rel="noopener noreferrer" whileHover={pillHover} whileTap={pillTap} style={outlinePillStyle}>LinkedIn ↗</motion.a>
      </Reveal>
      <Reveal as="form" delay={0.24} onSubmit={sendMessage} style={{ maxWidth: 560, margin: '48px auto 0', background: '#fbf7f0', border: '1px solid #e4d8c5', borderRadius: 18, padding: 32, display: 'grid', gap: 16, textAlign: 'left' }}>
        <p style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#12343b' }}>{c.formTitle}</p>
        <input name="nom" required placeholder={c.name} style={inputStyle} />
        <input name="email" type="email" required placeholder={c.email} style={inputStyle} />
        <textarea name="message" required rows={5} placeholder={c.message} style={textareaStyle} />
        <motion.button type="submit" whileHover={{ y: -2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.96 }} style={submitStyle}>{c.send}</motion.button>
      </Reveal>
    </section>
  );
}

const primaryPillStyle = { background: '#227c8e', color: '#fbf7f0', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, textDecoration: 'none' };
const outlinePillStyle = { background: 'transparent', color: '#227c8e', border: '1px solid #227c8e', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, textDecoration: 'none' };
const inputStyle = { fontFamily: 'inherit', fontSize: 17, letterSpacing: '-0.374px', color: '#12343b', background: '#fbf7f0', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 9999, padding: '12px 20px', height: 44, boxSizing: 'border-box', outline: 'none' };
const textareaStyle = { fontFamily: 'inherit', fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px', color: '#12343b', background: '#fbf7f0', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 18, padding: '14px 20px', resize: 'vertical', outline: 'none' };
const submitStyle = { fontFamily: 'inherit', background: '#227c8e', color: '#fbf7f0', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, border: 'none', cursor: 'pointer', justifySelf: 'start' };
