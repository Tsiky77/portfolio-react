import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

// Fine barre en haut de l'écran qui indique l'avancement du défilement.
// La progression est calculée ici plutôt qu'avec useScroll : framer garde la longueur de page
// mesurée au chargement et, après un redimensionnement, la compte comme nulle (« 100 % défilé »).
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    function update() {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress.set(range > 1 ? Math.min(Math.max(window.scrollY / range, 0), 1) : 0);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Le changement de page modifie la hauteur du document sans déclencher de scroll ni de resize.
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, [progress]);

  return <motion.div className="scroll-progress" style={{ scaleX: reduceMotion ? progress : smoothProgress }} aria-hidden="true" />;
}
