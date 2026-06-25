import type { Job } from '../types/cv.types';
import type { SectionVariant } from './HeaderSection';

interface Props {
  experience: Job[];
  variant?: SectionVariant;
}

export default function ExperienceSection({ experience, variant = 'standard' }: Props) {

  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">Work Experience</div>

        {experience.map(job => {
          const bullets = job.bullets.filter(Boolean);
          const company = [job.company, job.location].filter(Boolean).join(' · ');
          const dates   = [job.startDate, job.endDate].filter(Boolean).join(' – ');

          return (
            <div key={job.id} className="harvardcv-item">
              <div className="harvardcv-row">
                <div>
                  <div className="harvardcv-title">{job.title || 'Job Title'}</div>
                  {company && <div className="harvardcv-subtitle">{company}</div>}
                </div>
                {dates && <div className="harvardcv-meta">{dates}</div>}
              </div>

              {bullets.length > 0 && (
                <ul className="harvardcv-bullets">
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <div className="europass-section">
        <h2>Work Experience</h2>

        {experience.map(job => {
          const bullets = job.bullets.filter(Boolean);
          const company = [job.company, job.location].filter(Boolean).join(' · ');
          const dates   = [job.startDate, job.endDate].filter(Boolean).join(' – ');

          return (
            <div key={job.id} className="europass-job">
              {dates && <div className="europass-job-date">{dates}</div>}
              <div className="europass-job-title">
                {job.title || 'Job Title'}
                {company && <span> · {company}</span>}
              </div>

              {bullets.length > 0 && (
                <ul>
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="cv-section">
      <div className="cv-section-title">Work Experience</div>

      {experience.map(job => {
        const bullets = job.bullets.filter(Boolean);
        const company = [job.company, job.location].filter(Boolean).join(' · ');
        const dates   = [job.startDate, job.endDate].filter(Boolean).join(' – ');

        return (
          <div key={job.id} className="cv-job">
            <div className="cv-job-header">
              <div className="cv-job-left">
                <div className="cv-job-title">{job.title || 'Job Title'}</div>
                {company && <div className="cv-job-company">{company}</div>}
              </div>
              {dates && <div className="cv-job-date">{dates}</div>}
            </div>

            {bullets.length > 0 && (
              <ul className="cv-ul">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
