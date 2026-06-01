import { useReveal } from '../../../hooks/useReveal';
import SkillsGrid from './SkillsGrid';
import TechSkillContent from './TechSkillContent';

export default function TechnicalSkills() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="skills" ref={ref} className="reveal">
      <TechSkillContent />
      <SkillsGrid />
    </section>
  );
}
