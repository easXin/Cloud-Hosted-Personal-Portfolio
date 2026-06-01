import { useReveal } from '../../../hooks/useReveal';

import ProjectContent from './ProjectContent';
import ProjectGrid from './ProjectGrid';

export default function FeaturedProjects() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="projects" ref={ref} className="reveal">
      <ProjectContent />
      <ProjectGrid />
    </section>
  );
}
