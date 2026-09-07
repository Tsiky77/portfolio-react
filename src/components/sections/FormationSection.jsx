import { useState } from 'react';
import { formationCards, formationImages, licenceCourseGroups, semesters } from '../../data/portfolioData';

export default function FormationSection() {
  // État pour gérer l'onglet actif ('L2' ou 'CESI')
  const [activeTab, setActiveTab] = useState('L2');

  return (
    <section style={{ background: '#f5f5f7', padding: '96px 22px', textAlign: 'center' }}>
      <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#7a7a7a', textTransform: 'uppercase' }}>
        Formation
      </p>
      
      {/* Sélecteur d'onglets */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '24px auto 48px', 
        background: '#e3e3e5', 
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
            background: activeTab === 'L2' ? '#ffffff' : 'transparent',
            boxShadow: activeTab === 'L2' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            color: activeTab === 'L2' ? '#1d1d1f' : '#7a7a7a',
            transition: 'all 0.2s ease',
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif"
          }}
        >
          Licence L2 EEA (Actuel)
        </button>
        <button
          onClick={() => setActiveTab('CESI')}
          style={{
            padding: '8px 24px',
            border: 'none',
            borderRadius: 16,
            background: activeTab === 'CESI' ? '#ffffff' : 'transparent',
            boxShadow: activeTab === 'CESI' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            color: activeTab === 'CESI' ? '#1d1d1f' : '#7a7a7a',
            transition: 'all 0.2s ease',
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif"
          }}
        >
          Cycle Prépa CESI
        </button>
      </div>

      {/* CONTENU ONGLET 1 : L2 EEA */}
      {activeTab === 'L2' && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#1d1d1f' }}>
            Université Paul Sabatier, Toulouse.
          </h2>
          <p style={{ margin: '14px auto 0', maxWidth: 640, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 24, fontWeight: 300, lineHeight: 1.5, color: '#1d1d1f' }}>
            Licence L2 EEA — Électronique, Énergie Électrique et Automatique — au sein du Cursus Universitaire Préparatoire aux Grandes Écoles (CUPGE), à partir de septembre 2026.
          </p>

          <div style={{ maxWidth: 640, margin: '48px auto 0', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: 18, padding: 32, textAlign: 'left', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <p style={{ margin: '0 0 8px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#0066cc', textTransform: 'uppercase' }}>Programme en cours</p>
            <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 600, letterSpacing: '-0.374px', color: '#1d1d1f' }}>
              Électronique, Énergie Électrique, Automatique (EEA)
            </h3>
            <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.5, letterSpacing: '-0.224px', color: '#333333' }}>
              Nouvelle formation intégrant le programme CUPGE (Cursus Universitaire Préparatoire aux Grandes Écoles) à l'Université Paul Sabatier de Toulouse dès la rentrée de septembre 2026.
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.43, color: '#7a7a7a' }}>
              Spécialisation prévue en systèmes embarqués, traitement du signal et informatique industrielle.
            </p>
          </div>

          <div className="licence-courses">
            <div className="licence-courses__heading">
              <p className="apple-eyebrow">Programme</p>
              <h3>Les enseignements abordés.</h3>
              <p>Un cursus articulé autour de l’électronique, de l’automatique, de l’énergie et de l’informatique industrielle.</p>
            </div>
            <div className="licence-courses__grid">
              {licenceCourseGroups.map((group) => (
                <article key={group.label} className="licence-courses__group">
                  <h4>{group.label}</h4>
                  <ul>
                    {group.courses.map(([code, name]) => (
                      <li key={`${code}-${name}`}><code>{code}</code><span>{name}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTENU ONGLET 2 : CESI TOULOUSE */}
      {activeTab === 'CESI' && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#1d1d1f' }}>
            CESI École d'Ingénieurs.
          </h2>
          <p style={{ margin: '14px auto 0', maxWidth: 640, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 24, fontWeight: 300, lineHeight: 1.5, color: '#1d1d1f' }}>
            Cycle préparatoire intégré, spécialité Systèmes Électriques et Électroniques Embarqués (S3E).
          </p>

          {/* Cartes de compétences CESI */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, maxWidth: 980, margin: '48px auto 0', textAlign: 'left' }}>
            {formationCards.map((c) => (
              <div key={c.titre} style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: 18, padding: 24 }}>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#1d1d1f' }}>{c.titre}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#333333' }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ margin: '64px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#1d1d1f' }}>
            Matières abordées, semestre par semestre.
          </h3>
          
          {/* Grille des semestres */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, maxWidth: 980, margin: '32px auto 0', textAlign: 'left' }}>
            {semesters.map((s) => (
              <div key={s.label} style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: 18, padding: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', margin: '0 0 4px' }}>
                  <img src={s.photo} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <p style={{ margin: 0, padding: '0 24px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#0066cc', textTransform: 'uppercase' }}>{s.label}</p>
                <ul style={{ margin: 0, padding: '0 24px 0 42px', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#333333' }}>
                  {s.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p style={{ margin: '4px 24px 0', fontSize: 11, color: '#a0a0a0' }}>
                  <a href={s.creditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#a0a0a0' }}>{s.credit}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Grille d'images */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, maxWidth: 980, margin: '48px auto 0' }}>
            {formationImages.map((im) => (
              <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: '100%', aspectRatio: '4/3' }}>
                  <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, display: 'block' }} />
                </div>
                <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#7a7a7a', textAlign: 'center' }}>{im.cap}</figcaption>
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
