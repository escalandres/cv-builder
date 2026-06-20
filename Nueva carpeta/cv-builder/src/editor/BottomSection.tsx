import type { Language } from '../types/cv.types';
import type { SectionVariant } from './HeaderSection';

interface Props {
  languages:  Language[];
  softSkills: string[];
  variant?: SectionVariant;
}

export default function BottomSection({ languages, softSkills, variant = 'standard' }: Props) {

  if (variant === 'harvard') {
    return (
      <>
        {languages.length > 0 && (
          <div className="harvardcv-section">
            <div className="harvardcv-section-title">Languages</div>
            <div className="harvardcv-languages">
              {languages.map(lang => (
                <div key={lang.id} className="harvardcv-language">
                  <strong>{lang.name}</strong>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {softSkills.length > 0 && (
          <div className="harvardcv-section">
            <div className="harvardcv-section-title">Soft Skills</div>
            <div className="harvardcv-softskills">
              {softSkills.map((skill, i) => (
                <div key={i} className="harvardcv-chip">{skill}</div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  if (variant === 'europass') {
    return (
      <>
        {languages.length > 0 && (
          <div className="europass-section">
            <h2>Languages</h2>
            {languages.map(lang => (
              <div key={lang.id} className="europass-text">
                <strong>{lang.name}</strong> · {lang.level}
              </div>
            ))}
          </div>
        )}

        {softSkills.length > 0 && (
          <div className="europass-section">
            <h2>Soft Skills</h2>
            <div className="europass-text">{softSkills.join('  ·  ')}</div>
          </div>
        )}
      </>
    );
  }

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
