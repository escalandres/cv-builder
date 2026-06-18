import type { Job } from '../data/cv.model';

interface Props {
  experience: Job[];
}

export default function ExperienceSection({ experience }: Props) {
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
