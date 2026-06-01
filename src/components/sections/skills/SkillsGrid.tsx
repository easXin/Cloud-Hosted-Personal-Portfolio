import { skillCategories } from '../../../data/skills';
import TechSkillIcon from './TechSkillIcon';

export default function SkillsGrid() {
    return (
        <div className="skills-grid">
            {skillCategories.map((skill, idx) => (
                <div key={idx} className="skill-card">
                    <div className="skill-head">
                        <div className="skill-icon">
                            <TechSkillIcon name={skill.icon} />
                        </div>
                        <h3>{skill.title}</h3>
                    </div>
                    <div className="skill-tags">
                        {skill.items.map((item) => (
                            <span key={item} className="skill-tag">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

