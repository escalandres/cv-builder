import '../styles/academic.css';
import type { CV } from '../types/cv.types';

interface Props { cv: CV; }

export default function AcademicCV({ cv }: Props) {
  const {
    personal, summary, education, experience,
    certifications, projects, skills, softSkills, languages,
  } = cv;

  const allSkills = [...skills, ...softSkills].filter(Boolean);

  const contacts = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin  && personal.linkedin,
    personal.github    && personal.github,
    personal.portfolio && personal.portfolio,
  ].filter(Boolean) as string[];

  return (
    <div className="academiccv">

      {/* ── HEADER ── */}
      <header className="academiccv-header">
        <h1>{personal.name || 'Your Name'}</h1>
        {personal.role && (
          <div className="academiccv-role">{personal.role}</div>
        )}
        {contacts.length > 0 && (
          <div className="academiccv-contact">
            {contacts.map((c, i) => (
              <span key={i}>
                {i > 0 && <span className="academiccv-sep">|</span>}
                {c}
              </span>
            ))}
          </div>
        )}
        <div className="academiccv-rule" />
      </header>

      {/* ── EDUCATION ── */}
      {(education.degree || education.school) && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Education</h2>

          <div className="academiccv-edu">
            <div className="academiccv-edu-row">
              {education.degree && (
                <div className="academiccv-edu-degree">{education.degree}</div>
              )}
              {education.graduation && (
                <div className="academiccv-meta">{education.graduation}</div>
              )}
            </div>

            {education.school && (
              <div className="academiccv-edu-school">
                {education.school}
                {education.location && ` · ${education.location}`}
              </div>
            )}

            {education.gpa && (
              <div className="academiccv-edu-detail">
                <strong>GPA:</strong> {education.gpa}
              </div>
            )}

            {education.thesis && (
              <div className="academiccv-edu-detail">
                <strong>Thesis:</strong> {education.thesis}
              </div>
            )}

            {education.coursework?.length > 0 && (
              <div className="academiccv-edu-detail">
                <strong>Relevant Coursework:</strong>{' '}
                {education.coursework.filter(Boolean).join(', ')}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── SUMMARY ── */}
      {summary && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Professional Summary</h2>
          <p className="academiccv-summary">{summary}</p>
        </section>
      )}

      {/* ── EXPERIENCE ── */}
      {experience.length > 0 && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Experience</h2>

          {experience.map(job => {
            const bullets = job.bullets.filter(Boolean);
            const dates   = [job.startDate, job.endDate].filter(Boolean).join(' – ');
            const org     = [job.company, job.location].filter(Boolean).join(', ');

            return (
              <div key={job.id} className="academiccv-entry">
                <div className="academiccv-entry-row">
                  <div className="academiccv-entry-title">{job.title}</div>
                  {dates && <div className="academiccv-meta">{dates}</div>}
                </div>
                {org && (
                  <div className="academiccv-entry-org">{org}</div>
                )}
                {bullets.length > 0 && (
                  <ul className="academiccv-ul">
                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* ── CERTIFICATIONS ── */}
      {certifications.length > 0 && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Certifications</h2>

          {certifications.map(cert => (
            <div key={cert.id} className="academiccv-entry">
              <div className="academiccv-entry-row">
                <div className="academiccv-entry-title">{cert.name}</div>
                {cert.date && <div className="academiccv-meta">{cert.date}</div>}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ── PROJECTS ── */}
      {projects.length > 0 && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Projects</h2>

          {projects.map(p => {
            const dates   = [p.startDate, p.endDate].filter(Boolean).join(' – ');
            const bullets = p.bullets.filter(Boolean);

            return (
              <div key={p.id} className="academiccv-entry">
                <div className="academiccv-entry-row">
                  <div className="academiccv-entry-title">{p.title}</div>
                  {dates && <div className="academiccv-meta">{dates}</div>}
                </div>
                {p.tech && (
                  <div className="academiccv-entry-org">{p.tech}</div>
                )}
                {bullets.length > 0 && (
                  <ul className="academiccv-ul">
                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* ── SKILLS ── */}
      {allSkills.length > 0 && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Skills</h2>
          <p className="academiccv-skills">{allSkills.join(' · ')}</p>
        </section>
      )}

      {/* ── LANGUAGES ── */}
      {languages.length > 0 && (
        <section className="academiccv-section">
          <h2 className="academiccv-section-title">Languages</h2>
          <div className="academiccv-languages">
            {languages.map(lang => (
              <div key={lang.id} className="academiccv-language">
                <strong>{lang.name}</strong>
                {lang.level && <span>{lang.level}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}