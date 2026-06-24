import '../styles/modern.css';

import type { CV } from '../types/cv.types';

interface Props {
  cv: CV;
}

export default function ModernCV({ cv }: Props) {
  const {
    personal, summary, skills, softSkills,
    certifications, experience, education, languages, projects,
  } = cv;

  const allSkills = [...skills, ...softSkills].filter(Boolean);

  return (
    <div className="moderncv">

      {/* ── HEADER ── */}
      <header className="moderncv-header">
        <h1>{personal.name || 'YOUR NAME'}</h1>
        {personal.role && <div className="moderncv-role">{personal.role}</div>}
        <div className="moderncv-contact">
          {personal.phone     && <span><span className="moderncv-icon">📞</span>{personal.phone}</span>}
          {personal.email     && <span><span className="moderncv-icon">✉</span>{personal.email}</span>}
          {personal.portfolio && <span><span className="moderncv-icon">🔗</span>{personal.portfolio}</span>}
          {personal.location  && <span><span className="moderncv-icon">📍</span>{personal.location}</span>}
        </div>
      </header>

      {/* ── BODY: left 60% / right 38% ── */}
      <div className="moderncv-body">

        {/* ── LEFT COLUMN ── */}
        <main className="moderncv-left">

          {summary && (
            <section>
              <h3 className="moderncv-section-title">Resumen</h3>
              <p className="moderncv-summary">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h3 className="moderncv-section-title">Experiencia</h3>
              {experience.map(job => {
                const bullets = job.bullets.filter(Boolean);
                const dates   = [job.startDate, job.endDate].filter(Boolean).join(' - ');
                return (
                  <div key={job.id} className="moderncv-job">
                    <div className="moderncv-job-title">{job.title}</div>
                    {job.company && (
                      <div className="moderncv-job-company">{job.company}</div>
                    )}
                    <div className="moderncv-job-meta">
                      {dates       && <span><span className="moderncv-icon">📅</span>{dates}</span>}
                      {job.location && <span><span className="moderncv-icon">📍</span>{job.location}</span>}
                    </div>
                    {bullets.length > 0 && (
                      <ul className="moderncv-ul">
                        {bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                );
              })}
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h3 className="moderncv-section-title">Idiomas</h3>
              <div className="moderncv-languages">
                {languages.map(lang => {
                  const LEVELS = ['','A1','A2','B1','B2','C1','C2','Native'];
                  const idx    = LEVELS.indexOf(lang.level.split(' ')[0]);
                  const dots   = Math.min(Math.max(idx < 0 ? 1 : idx, 1), 5);
                  return (
                    <div key={lang.id} className="moderncv-language">
                      <strong>{lang.name}</strong>
                      <span className="moderncv-lang-level">{lang.level}</span>
                      <div className="moderncv-dots">
                        {[1,2,3,4,5].map(d => (
                          <span key={d} className={`moderncv-dot${d <= dots ? ' filled' : ''}`} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="moderncv-section-title">Proyectos</h3>
              {projects.map(p => {
                const dates   = [p.startDate, p.endDate].filter(Boolean).join(' - ');
                const bullets = p.bullets.filter(Boolean);
                return (
                  <div key={p.id} className="moderncv-project">
                    <div className="moderncv-project-title">{p.title}</div>
                    {dates && (
                      <div className="moderncv-project-meta">
                        <span className="moderncv-icon">📅</span>{dates}
                      </div>
                    )}
                    {bullets.length > 0
                      ? <ul className="moderncv-ul">{bullets.map((b,i) => <li key={i}>{b}</li>)}</ul>
                      : p.tech && <p className="moderncv-project-desc">{p.tech}</p>
                    }
                  </div>
                );
              })}
            </section>
          )}

        </main>

        {/* ── RIGHT COLUMN ── */}
        <aside className="moderncv-right">

          {certifications.length > 0 && (
            <section>
              <h3 className="moderncv-section-title">Certifications</h3>
              {certifications.map(cert => (
                <div key={cert.id} className="moderncv-cert">
                  <strong>{cert.name}</strong>
                  {cert.date && <span>{cert.date}</span>}
                </div>
              ))}
            </section>
          )}

          {allSkills.length > 0 && (
            <section>
              <h3 className="moderncv-section-title">Habilidades</h3>
              <div className="moderncv-tags">
                {allSkills.map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </section>
          )}

          {(education.degree || education.school) && (
            <section>
              <h3 className="moderncv-section-title">Educación</h3>
              <div className="moderncv-education">
                {education.degree && <strong>{education.degree}</strong>}
                {education.school && (
                  <span className="moderncv-edu-school">{education.school}</span>
                )}
                <div className="moderncv-job-meta">
                  {education.graduation && (
                    <span><span className="moderncv-icon">📅</span>{education.graduation}</span>
                  )}
                  {education.location && (
                    <span><span className="moderncv-icon">📍</span>{education.location}</span>
                  )}
                </div>
              </div>
            </section>
          )}

        </aside>

      </div>
    </div>
  );
}