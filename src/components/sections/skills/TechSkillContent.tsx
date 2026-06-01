import { techSkills } from "../../../data/profile";

export default function TechSkillContent() {
    return (
        <>
            <div className="section-label">{techSkills.label}</div>
            <h2 className="section-title">{techSkills.title}</h2>
            <p className="section-sub">{techSkills.description}</p>
        </>
    )
};
