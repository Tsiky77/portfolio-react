import { createContext, useContext } from 'react';

export const LANGUAGES = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export const LanguageContext = createContext(null);

export function useLang() {
  return useContext(LanguageContext);
}
