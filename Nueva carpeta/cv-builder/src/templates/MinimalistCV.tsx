import '../styles/minimalist.css';
import type { CV } from '../types/cv.types';

interface Props { cv: CV; }

export default function MinimalistCV({ cv }: Props) {
  const {
    personal, summary, experience,
    education, certifications, skills, softSkills, languages, projects,
  } = cv;

  const allSkills = [...skills, ...softSkills].filter(Boolean);

  const contacts = [
    personal.phone,
    personal.email,
    personal.portfolio,
    personal.location,
  ].filter(Boolean);

  return (
    <div className="minimalcv">

      {/* ── HEADER ── */}
      <header className="minimalcv-header">
        <h1>{personal.name || 'YOUR NAME'}</h1>
        {personal.role && <div className="minimalcv-role">{personal.role}</div>}
        <div className="minimalcv-contact">
          {contacts.map((c, i) => <span key={i}>{c}</span>)}
        </div>
      </header>

      {/* ── SUMMARY ── */}
      {summary && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Resumen</h3>
          <p className="minimalcv-summary">{summary}</p>
        </section>
      )}

      {/* ── EXPERIENCE ── */}
      {experience.length > 0 && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Experiencia</h3>
          {experience.map(job => {
            const bullets = job.bullets.filter(Boolean);
            const dates   = [job.startDate, job.endDate].filter(Boolean).join(' - ');
            return (
              <div key={job.id} className="minimalcv-job">
                <div className="minimalcv-job-row">
                  <div className="minimalcv-job-title">{job.title}</div>
                  {job.location && <span className="minimalcv-meta">{job.location}</span>}
                </div>
                <div className="minimalcv-job-row">
                  {job.company && <div className="minimalcv-job-company">{job.company}</div>}
                  {dates && <span className="minimalcv-meta">{dates}</span>}
                </div>
                {bullets.length > 0 && (
                  <ul className="minimalcv-ul">
                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* ── EDUCATION ── */}
      {(education.degree || education.school) && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Educación</h3>
          <div className="minimalcv-job">
            <div className="minimalcv-job-row">
              <div className="minimalcv-job-title">{education.degree}</div>
              {education.location && <span className="minimalcv-meta">{education.location}</span>}
            </div>
            <div className="minimalcv-job-row">
              {education.school && <div className="minimalcv-job-company">{education.school}</div>}
              {education.graduation && <span className="minimalcv-meta">{education.graduation}</span>}
            </div>
          </div>
        </section>
      )}

      {/* ── PROJECTS ── */}
      {projects.length > 0 && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Proyectos</h3>
          {projects.map(p => {
            const dates   = [p.startDate, p.endDate].filter(Boolean).join(' - ');
            const bullets = p.bullets.filter(Boolean);
            return (
              <div key={p.id} className="minimalcv-job">
                <div className="minimalcv-job-row">
                  <div className="minimalcv-project-title">{p.title}</div>
                  {dates && <span className="minimalcv-meta">{dates}</span>}
                </div>
                {bullets.length > 0
                  ? <ul className="minimalcv-ul">{bullets.map((b,i) => <li key={i}>{b}</li>)}</ul>
                  : p.tech && <p className="minimalcv-project-desc">{p.tech}</p>
                }
              </div>
            );
          })}
        </section>
      )}

      {/* ── CERTIFICATIONS ── */}
      {certifications.length > 0 && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Certifications</h3>
          <div className="minimalcv-certs">
            {certifications.map(cert => (
              <div key={cert.id} className="minimalcv-cert">
                <span className="minimalcv-cert-name">{cert.name}</span>
                {cert.date && <span className="minimalcv-meta">{cert.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── LANGUAGES ── */}
      {languages.length > 0 && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Idiomas</h3>
          <div className="minimalcv-languages">
            {languages.map(lang => (
              <div key={lang.id} className="minimalcv-language">
                <strong>{lang.name}</strong>
                <span className="minimalcv-meta">({lang.level})</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── SKILLS ── */}
      {allSkills.length > 0 && (
        <section className="minimalcv-section">
          <h3 className="minimalcv-section-title">Habilidades</h3>
          <p className="minimalcv-skills">{allSkills.join(', ')}</p>
        </section>
      )}

    </div>
  );
}