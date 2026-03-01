import { renderBullets, hasAnyValue } from "../utils";

function ProjectsSection({ projects }) {
  if (!projects.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Projects</h2>
      {projects.filter(hasAnyValue).map((proj) => (
        <div className="section-entry" key={proj.id}>
          {(proj.title || proj.link) && (
            <div className="first-row">
              {proj.title && <strong>{proj.title}</strong>}
              {proj.link && (
                <a
                  href={`https://${proj.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.link}
                </a>
              )}
            </div>
          )}
          {renderBullets(proj.description)}
        </div>
      ))}
    </section>
  );
}

export default ProjectsSection;
