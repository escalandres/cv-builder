import type { Language } from '../data/cv.model';

interface Props {
  languages:  Language[];
  softSkills: string[];
}

export default function BottomSection({ languages, softSkills }: Props) {
  return (
    <div className="cv-bottom-row">

      {languages.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">Languages</div>
          {languages.map(lang => (
            <div key={lang.id} className="cv-lang">
              <strong>{lang.name}</strong>
              {' · '}
              {lang.level}
            </div>
          ))}
        </div>
      )}

      {softSkills.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">Soft Skills</div>
          <div className="cv-skills-grid">
            {softSkills.map((skill, i) => (
              <div key={i} className="cv-skill">{skill}</div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
