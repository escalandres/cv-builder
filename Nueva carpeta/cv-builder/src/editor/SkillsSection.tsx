import type { SectionVariant } from './HeaderSection';

interface Props {
  skills: string[];
  variant?: SectionVariant;
}

export default function SkillsSection({ skills, variant = 'standard' }: Props) {
  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">Technical Skills</div>
        <div className="harvardcv-skills">
          {skills.map((skill, i) => (
            <div key={i} className="harvardcv-chip">{skill}</div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <div className="europass-section">
        <h2>Technical Skills</h2>
        <div className="europass-text">{skills.join('  ·  ')}</div>
      </div>
    );
  }

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
