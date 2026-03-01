import { renderBullets, hasAnyValue } from "../utils";

function EducationSection({ education }) {
  if (!education.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Education</h2>
      {education.filter(hasAnyValue).map((edu) => (
        <div className="section-entry" key={edu.id}>
          {(edu.school || edu.dateGraduated) && (
            <div className="first-row">
              {edu.school && <strong>{edu.school}</strong>}
              {edu.dateGraduated && <p>{edu.dateGraduated}</p>}
            </div>
          )}
          {edu.degree && <i>{edu.degree}</i>}
          {renderBullets(edu.description)}
        </div>
      ))}
    </section>
  );
}

export default EducationSection;
