import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie-consent'));

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', left: 22, right: 22, bottom: 92, zIndex: 51,
            maxWidth: 780, margin: '0 auto', background: '#fffcf5', border: '1px solid #e6dccb',
            borderRadius: 18, boxShadow: 'rgba(0,0,0,0.16) 0px 8px 30px 0', padding: '20px 24px',
            display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between',
          }}
        >
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#2b3550', flex: '1 1 320px' }}>
            Ce site utilise uniquement des cookies essentiels requis par GitHub Pages. Aucune donnée personnelle
            n'est collectée ou partagée.{' '}
            <Link to="/legal" onClick={accept} style={{ color: '#1f3a6e' }}>Politique de confidentialité</Link>
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={decline} style={declineBtnStyle}>Refuser</button>
            <button onClick={accept} style={acceptBtnStyle}>Accepter</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const declineBtnStyle = { fontFamily: 'inherit', cursor: 'pointer', background: 'transparent', color: '#14213d', border: '1px solid #e6dccb', fontSize: 14, letterSpacing: '-0.224px', padding: '8px 18px', borderRadius: 9999 };
const acceptBtnStyle = { fontFamily: 'inherit', cursor: 'pointer', background: '#1f3a6e', color: '#fffcf5', border: 'none', fontSize: 14, letterSpacing: '-0.224px', padding: '8px 18px', borderRadius: 9999 };
