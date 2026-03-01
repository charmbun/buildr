import { renderBullets, hasAnyValue } from "../utils";

function ExperienceSection({ experience }) {
  if (!experience.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Experience</h2>
      {experience.filter(hasAnyValue).map((exp) => (
        <div className="section-entry" key={exp.id}>
          {(exp.position || exp.dateFrom || exp.dateTo) && (
            <div className="first-row">
              {exp.position && <strong>{exp.position}</strong>}
              {(exp.dateFrom || exp.dateTo) && (
                <p>{[exp.dateFrom, exp.dateTo].filter(Boolean).join(" - ")}</p>
              )}
            </div>
          )}
          {exp.company && <i>{exp.company}</i>}
          {renderBullets(exp.description)}
        </div>
      ))}
    </section>
  );
}

export default ExperienceSection;
