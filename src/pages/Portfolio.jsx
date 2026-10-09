import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Dock from '../components/Dock';
import HeroSection from '../components/sections/HeroSection';
import TimelineSection from '../components/sections/TimelineSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import FormationSection from '../components/sections/FormationSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import SportSection from '../components/sections/SportSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/motion/ScrollProgress';
import { EASE } from '../components/motion/presets';

export default function Portfolio() {
  const [page, setPage] = useState('accueil');
  const [expIndex, setExpIndex] = useState(0);
  const [filtre, setFiltre] = useState('Tous');

  function goTo(id) {
    if (id === page) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setPage(id);
  }

  return (
    <>
      <ScrollProgress />
      <Dock page={page} goTo={goTo} />
      <main className="portfolio-main">
        {/* L'ancienne page s'efface, on remonte en haut, puis la nouvelle arrive. */}
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
          <motion.div
            key={page}
            className="portfolio-page"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.18, ease: 'easeIn' } }}
          >
            {page === 'accueil' && <HeroSection goTo={goTo} />}
            {page === 'accueil' && <TimelineSection goTo={goTo} />}
            {page === 'experience' && <ExperienceSection expIndex={expIndex} setExpIndex={setExpIndex} />}
            {page === 'formation' && <FormationSection />}
            {page === 'projets' && <ProjectsSection filtre={filtre} setFiltre={setFiltre} />}
            {page === 'competences' && <SkillsSection />}
            {page === 'natation' && <SportSection />}
            {page === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer goTo={goTo} />
    </>
  );
}
