import Background from './components/layout/Background';
import Nav from './components/layout/Nav';
import Introduction from './components/sections/introduction/Introduction';
import TechnicalSkills from './components/sections/skills/TechSkills';
import WorkExperience from './components/sections/experience/WorkExperience';
import FeaturedProjects from './components/sections/projects/FeaturedProjects';
import Contact from './components/sections/contact/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Introduction />
        <TechnicalSkills />
        <WorkExperience />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
