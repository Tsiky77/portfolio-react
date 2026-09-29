import { useState } from 'react';
import { useLang } from '../../i18n/useLang';

export default function FormationSection() {
  // État pour gérer l'onglet actif ('L2' ou 'CESI')
  const [activeTab, setActiveTab] = useState('L2');
  const { t, content } = useLang();
  const { formationCards, formationImages, licenceSubjects, semesters } = content;
  const tf = t.formation;

  return (
    <section style={{ background: '#fbe9e7', padding: '96px 22px', textAlign: 'center' }}>
      <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#86696a', textTransform: 'uppercase' }}>
        {tf.eyebrow}
      </p>
      
      {/* Sélecteur d'onglets */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '24px auto 48px', 
        background: '#f3dcd9', 
        padding: 4, 
        borderRadius: 20, 
        width: 'fit-content' 
      }}>
        <button
          onClick={() => setActiveTab('L2')}
          style={{
            padding: '8px 24px',
            border: 'none',
            borderRadius: 16,
            background: activeTab === 'L2' ? '#fffcf5' : 'transparent',
            boxShadow: activeTab === 'L2' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            color: activeTab === 'L2' ? '#3b1519' : '#86696a',
            transition: 'all 0.2s ease',
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif"
          }}
        >
          {tf.tabL2}
        </button>
        <button
          onClick={() => setActiveTab('CESI')}
          style={{
            padding: '8px 24px',
            border: 'none',
            borderRadius: 16,
            background: activeTab === 'CESI' ? '#fffcf5' : 'transparent',
            boxShadow: activeTab === 'CESI' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            color: activeTab === 'CESI' ? '#3b1519' : '#86696a',
            transition: 'all 0.2s ease',
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif"
          }}
        >
          {tf.tabCesi}
        </button>
      </div>

      {/* CONTENU ONGLET 1 : L2 EEA */}
      {activeTab === 'L2' && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
            {tf.l2Title}
          </h2>
          <p style={{ margin: '14px auto 0', maxWidth: 640, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 24, fontWeight: 300, lineHeight: 1.5, color: '#3b1519' }}>
            {tf.l2Subtitle}
          </p>

          <div style={{ maxWidth: 980, margin: '48px auto 0', background: '#fffcf5', border: '1px solid #ecd6cf', borderRadius: 18, padding: 32, textAlign: 'left', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <p style={{ margin: '0 0 8px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#8b1a1a', textTransform: 'uppercase' }}>{tf.l2CardLabel}</p>
            <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 600, letterSpacing: '-0.374px', color: '#3b1519' }}>
              {tf.l2CardTitle}
            </h3>
            <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#4a2a2d' }}>
              {tf.l2CardText}
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.43, color: '#86696a' }}>
              {tf.l2CardNote}
            </p>
          </div>

          <div className="licence-courses">
            <div className="licence-courses__heading">
              <p className="apple-eyebrow">{tf.coursesEyebrow}</p>
              <h3>{tf.coursesTitle}</h3>
              <p>{tf.coursesIntro}</p>
            </div>
            <div className="licence-courses__grid">
              {licenceSubjects.map((subject) => (
                <article key={subject.titre} className="licence-courses__group">
                  <h4>{subject.titre}</h4>
                  <p>{subject.texte}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTENU ONGLET 2 : CESI TOULOUSE */}
      {activeTab === 'CESI' && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#3b1519' }}>
            {tf.cesiTitle}
          </h2>
          <p style={{ margin: '14px auto 0', maxWidth: 640, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 24, fontWeight: 300, lineHeight: 1.5, color: '#3b1519' }}>
            {tf.cesiSubtitle}
          </p>

          {/* Cartes de compétences CESI */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 20, maxWidth: 980, margin: '48px auto 0', textAlign: 'left' }}>
            {formationCards.map((c) => (
              <div key={c.titre} style={{ background: '#fffcf5', border: '1px solid #ecd6cf', borderRadius: 18, padding: 24 }}>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#3b1519' }}>{c.titre}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#4a2a2d' }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ margin: '64px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#3b1519' }}>
            {tf.semestersTitle}
          </h3>
          
          {/* Grille des semestres */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 20, maxWidth: 980, margin: '32px auto 0', textAlign: 'left' }}>
            {semesters.map((s) => (
              <div key={s.label} style={{ background: '#fffcf5', border: '1px solid #ecd6cf', borderRadius: 18, padding: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', margin: '0 0 4px', flexShrink: 0 }}>
                  <img src={s.photo} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <p style={{ margin: 0, padding: '0 24px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#8b1a1a', textTransform: 'uppercase' }}>{s.label}</p>
                <ul style={{ margin: 0, padding: '0 24px 0 42px', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#4a2a2d' }}>
                  {s.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p style={{ margin: 'auto 24px 0', paddingTop: 4, fontSize: 11, color: '#a8918f' }}>
                  <a href={s.creditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#a8918f' }}>{s.credit}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Grille d'images */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: 24, maxWidth: 980, margin: '48px auto 0' }}>
            {formationImages.map((im) => (
              <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: '100%', aspectRatio: '4/3' }}>
                  <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, display: 'block' }} />
                </div>
                <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#86696a', textAlign: 'center' }}>{im.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
      
      {/* Ajout d'une petite animation CSS globale pour la transition des onglets */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
