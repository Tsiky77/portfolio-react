import { useEffect, useMemo, useState } from 'react';
import { LANGUAGES, LanguageContext } from './useLang';
import * as base from '../data/portfolioData';
import { ui } from './ui';
import en from './content/en';
import es from './content/es';
import de from './content/de';

const overlays = { en, es, de };
const STORAGE_KEY = 'lang';

// Superpose une traduction sur le contenu français : les tableaux sont fusionnés
// par index, les objets par clé. Tout ce qui n'est pas traduit reste en français.
function localize(source, overlay) {
  if (overlay === undefined || overlay === null) return source;
  if (Array.isArray(source)) return source.map((item, i) => localize(item, overlay[i]));
  if (source && typeof source === 'object') {
    const out = { ...source };
    for (const key of Object.keys(overlay)) out[key] = localize(source[key], overlay[key]);
    return out;
  }
  return overlay;
}

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGUAGES.some((l) => l.code === saved)) return saved;
  } catch {
    // stockage indisponible : on se rabat sur la langue du navigateur
  }
  const browser = (navigator.language || 'fr').slice(0, 2);
  return LANGUAGES.some((l) => l.code === browser) ? browser : 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // rien à faire
    }
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: ui[lang],
    content: lang === 'fr' ? base : localize(base, overlays[lang]),
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
