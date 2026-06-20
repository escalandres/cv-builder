import '../styles/modern.css';

import type { CV } from '../types/cv.types';

interface Props {
  cv: CV;
}

export default function ModernCV({ cv }: Props) {

  const {

    personal,

    summary,

    skills,

    certifications,

    experience,

    education,

    languages,

    softSkills,

  } = cv;

  return (

    <div className="cv-container">

      <div className="cv-doc moderncv">

        <header className="moderncv-header">

          <h1>

            {personal.name || 'YOUR NAME'}

          </h1>

          <h2>

            {personal.role}

          </h2>

          <div className="moderncv-contact">

            {personal.phone && (

              <span>

                📞 {personal.phone}

              </span>

            )}

            {personal.email && (

              <span>

                ✉️ {personal.email}

              </span>

            )}

            {personal.linkedin && (

              <span>

                🔗 {personal.linkedin}

              </span>

            )}

            {personal.location && (

              <span>

                📍 {personal.location}

              </span>

            )}

          </div>

        </header>

        <div className="moderncv-body">

          <aside className="moderncv-left">

            {!!skills.length && (

              <section>

                <h3>

                  SKILLS

                </h3>

                <div className="moderncv-tags">

                  {skills.map((skill,index)=>(

                    <span key={index}>

                      {skill}

                    </span>

                  ))}

                </div>

              </section>

            )}

            {!!certifications.length && (

              <section>

                <h3>

                  CERTIFICATIONS

                </h3>

                {certifications.map(cert=>(

                  <div

                    key={cert.id}

                    className="moderncv-item"

                  >

                    <strong>

                      {cert.name}

                    </strong>

                    <p>

                      {cert.date}

                    </p>

                  </div>

                ))}

              </section>

            )}

            {!!languages.length && (

              <section>

                <h3>

                  LANGUAGES

                </h3>

                <div className="moderncv-languages">

                  {languages.map(lang=>(

                    <div

                      key={lang.id}

                      className="moderncv-language"

                    >

                      <strong>

                        {lang.name}

                      </strong>

                      <span>

                        {lang.level}

                      </span>

                    </div>

                  ))}

                </div>

              </section>

            )}

            {!!softSkills.length && (

              <section>

                <h3>

                  SOFT SKILLS

                </h3>

                <div className="moderncv-tags">

                  {softSkills.map((skill,index)=>(

                    <span key={index}>

                      {skill}

                    </span>

                  ))}

                </div>

              </section>

            )}

          </aside>

          <main className="moderncv-right">

            {summary && (

              <section>

                <h3>

                  PROFILE

                </h3>

                <p>

                  {summary}

                </p>

              </section>

            )}

            {!!experience.length && (

              <section>

                <h3>

                  EXPERIENCE

                </h3>

                {experience.map(job=>(

                  <div

                    key={job.id}

                    className="moderncv-job"

                  >

                    <div className="moderncv-job-header">

                      <div>

                        <h4>

                          {job.title}

                        </h4>

                        <span>

                          {job.company}

                        </span>

                      </div>

                      <div className="moderncv-job-meta">

                        <span>

                          {job.startDate} - {job.endDate}

                        </span>

                        <span>

                          {job.location}

                        </span>

                      </div>

                    </div>

                    <ul>

                      {job.bullets

                        .filter(Boolean)

                        .map((bullet,index)=>(

                          <li key={index}>

                            {bullet}

                          </li>

                        ))

                      }

                    </ul>

                  </div>

                ))}

              </section>

            )}

            {(education.degree || education.school) && (

              <section>

                <h3>

                  EDUCATION

                </h3>

                <div className="moderncv-education">

                  <h4>

                    {education.degree}

                  </h4>

                  <span>

                    {education.school}

                  </span>

                  <div className="moderncv-job-meta">

                    <span>

                      {education.graduation}

                    </span>

                    <span>

                      {education.location}

                    </span>

                  </div>

                </div>

              </section>

            )}

          </main>

        </div>

      </div>

    </div>

  );

}
