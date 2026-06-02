import { useEffect, useState } from 'react';
import Background from './components/layout/Background';
import Nav from './components/layout/Nav';
import Introduction from './components/sections/introduction/Introduction';
import TechnicalSkills from './components/sections/skills/TechSkills';
import WorkExperience from './components/sections/experience/WorkExperience';
import FeaturedProjects from './components/sections/projects/FeaturedProjects';
import Contact from './components/sections/contact/Contact';
import Footer from './components/layout/Footer';
import NotFound from './components/errorpage/NotFound';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace('/', '');

    const validPaths = [
      '',
      'introduction',
      'skills',
      'experience',
      'projects',
      'contact',
    ];

    if (!validPaths.includes(path)) {
      setIsNotFound(true);
      return;
    }

    if (!path) return;

    const el = document.getElementById(path);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, []);

  return (
    <>
      <Background />
      <Nav />

      <main>
        {isNotFound ? (
          <NotFound />
        ) : (
          <>
            <Introduction />
            <TechnicalSkills />
            <WorkExperience />
            <FeaturedProjects />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}