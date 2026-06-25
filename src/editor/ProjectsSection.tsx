import type { Project } from '../types/cv.types';
import { useTranslation } from 'react-i18next';
interface Props {
  projects: Project[];
}

export default function ProjectsSection({ projects }: Props) {
  const { t } = useTranslation();
  return (
    <div className="cv-section">
      <div className="cv-section-title">{t('cv.sections.projects')}</div>

      {projects.map(project => {
        const bullets = project.bullets.filter(Boolean);
        const dates   = [project.startDate, project.endDate].filter(Boolean).join(' – ');

        return (
          <div key={project.id} className="cv-job">
            <div className="cv-job-header">
              <div className="cv-job-left">
                <div className="cv-job-title">{project.title}</div>
                {project.tech && (
                  <div className="cv-job-company">{project.tech}</div>
                )}
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
