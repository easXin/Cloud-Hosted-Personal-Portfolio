import { introduction } from "../../../data/profile";

export default function IntroContent() {
    return (
        <>
            <div className="intro-label">{introduction.label}</div>
            <h1 className="intro-name">{introduction.name}</h1>
            <h2 className="intro-title">{introduction.title}</h2>
            <p
                className="intro-desc"
                // render html attribute
                dangerouslySetInnerHTML={{ __html: introduction.description }}
            />
        </>
    )
}