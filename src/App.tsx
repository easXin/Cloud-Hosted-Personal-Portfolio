import Background from './components/Background';
import Nav from './components/Nav';
import Introduction from './components/Introduction';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import FeaturedProjects from './components/FeaturedProjects';
import ClearanceExperience from './components/ClearanceExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <ClearanceExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
