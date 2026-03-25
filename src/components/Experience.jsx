import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Experience({ language, mode }) {
    let content = language === "PL" ? contentPL : contentEN;
    const subColor = mode === 'dark' ? 'text-light opacity-75' : 'text-secondary';

    if (!content.experience || !content.experience.places) return null;

    return (
        <div className="timeline">
            {content.experience.places.map((item) => (
                <div key={item.title} className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="mb-0 fw-semibold">
                        {item.title} <span className="text-primary fw-normal">{item.more}</span>
                    </p>
                    <small className={subColor}>{item.description}</small>
                </div>
            ))}
        </div>
    )
}
