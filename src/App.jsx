import { HashRouter, Routes, Route } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import Portfolio from './pages/Portfolio';
import Legal from './pages/Legal';
import { LanguageProvider } from './i18n/LanguageContext';
import './index.css';

export default function App() {
  return (
    <LanguageProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <CookieBanner />
    </HashRouter>
    </LanguageProvider>
  );
}
