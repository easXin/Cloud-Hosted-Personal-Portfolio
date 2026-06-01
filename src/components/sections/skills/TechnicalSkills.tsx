import { useReveal } from '../../../hooks/useReveal';
import { skillCategories } from '../../../data/skills';
import TechnicalSkillIcon from './TechnicalSkillIcon';

export default function TechnicalSkills() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="skills" ref={ref} className="reveal">
      <div className="section-label">02 — Technical Skills</div>
      <h2 className="section-title">Technical skills</h2>
      <p className="section-sub">
        Core stack across the frontend, backend, data, and tooling layers used in current and prior roles.
      </p>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <div className="skill-head">
              <div className="skill-icon">
                <TechnicalSkillIcon name={cat.icon} />
              </div>
              <h3>{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
