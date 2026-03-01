import { hasAnyValue } from "../utils";

function SkillsSection({ skills }) {
  if (!skills.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Skills</h2>
      {skills.filter(hasAnyValue).map((skill) => (
        <div key={skill.id}>
          {skill.groupName && <strong>{skill.groupName}</strong>}
          {skill.items && (
            <>
              {skill.groupName && ": "}
              <span>{skill.items}</span>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default SkillsSection;
