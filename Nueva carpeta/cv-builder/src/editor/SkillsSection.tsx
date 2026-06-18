interface Props {
  skills: string[];
}

export default function SkillsSection({ skills }: Props) {
  return (
    <div className="cv-section">
      <div className="cv-section-title">Technical Skills</div>
      <div className="cv-skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="cv-skill">{skill}</div>
        ))}
      </div>
    </div>
  );
}
