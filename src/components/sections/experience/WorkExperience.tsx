import { useReveal } from '../../../hooks/useReveal';
import ExperienceContent from './ExperienceContent';
import Timeline from './Timeline';

export default function WorkExperience() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="experience" ref={ref} className="reveal">
      <ExperienceContent />
      <Timeline />
    </section>
  );
}
