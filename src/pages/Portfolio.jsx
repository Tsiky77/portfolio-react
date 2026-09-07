import { useState } from 'react';
import Dock from '../components/Dock';
import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import FormationSection from '../components/sections/FormationSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

export default function Portfolio() {
  const [page, setPage] = useState('accueil');
  const [expIndex, setExpIndex] = useState(0);
  const [filtre, setFiltre] = useState('Tous');

  function goTo(id) {
    setPage(id);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Dock page={page} goTo={goTo} />
      <main className="portfolio-main">
        {page === 'accueil' && <HeroSection goTo={goTo} />}
        {page === 'experience' && <ExperienceSection expIndex={expIndex} setExpIndex={setExpIndex} />}
        {page === 'formation' && <FormationSection />}
        {page === 'projets' && <ProjectsSection filtre={filtre} setFiltre={setFiltre} />}
        {page === 'competences' && <SkillsSection />}
        {page === 'contact' && <ContactSection />}
      </main>
      <Footer goTo={goTo} />
    </>
  );
}
