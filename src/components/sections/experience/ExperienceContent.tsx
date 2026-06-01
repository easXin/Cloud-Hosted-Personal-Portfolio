import { workExperience } from '../../../data/profile';

export default function ExperienceContent() {
    return (
        <>
            <div className="section-label">{workExperience.label}</div>
            <h2 className="section-title">{workExperience.title}</h2>
            <p className="section-sub">{workExperience.description}</p>
        </>
    );
}
