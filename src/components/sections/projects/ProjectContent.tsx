import { projects } from '../../../data/profile';

export default function ProjectContent() {
    return (
        <>
            <div className="section-label">{projects.label}</div>
            <h2 className="section-title">{projects.title}</h2>
            <p className="section-sub"> {projects.description}</p>
        </>
    );
}
