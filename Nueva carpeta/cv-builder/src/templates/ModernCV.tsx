import '../styles/modern.css';

interface Personal {
  name:string;
  role:string;
  email:string;
  phone:string;
  location:string;
  linkedin:string;
}

interface Achievement {
  id:string;
  title:string;
  description:string;
}

interface Experience {
  id:string;
  title:string;
  company:string;
  location:string;
  startDate:string;
  endDate:string;
  bullets:string[];
}

interface Education {
  degree:string;
  school:string;
  location:string;
  graduation:string;
}

interface Language {
  id:string;
  name:string;
  level:string;
}

interface Certification {
  id:string;
  name:string;
  issuer:string;
}

interface Interest {
  id:string;
  title:string;
  description:string;
}

interface ModernCVProps {
  cv:{
    personal:Personal;
    summary:string;
    achievements:Achievement[];
    skills:string[];
    certifications:Certification[];
    interests:Interest[];
    experience:Experience[];
    education:Education;
    languages:Language[];
  };
}

export default function ModernCV({cv}:ModernCVProps){

  const {
    personal,
    summary,
    achievements,
    skills,
    certifications,
    interests,
    experience,
    education,
    languages
  }=cv;

  return(

    <div className="moderncv">

      <header className="moderncv-header">

        <h1>{personal.name || 'YOUR NAME'}</h1>

        <h2>{personal.role}</h2>

        <div className="moderncv-contact">

          {personal.phone && <span>📞 {personal.phone}</span>}

          {personal.email && <span>@ {personal.email}</span>}

          {personal.linkedin && <span>🔗 {personal.linkedin}</span>}

          {personal.location && <span>📍 {personal.location}</span>}

        </div>

      </header>

      <div className="moderncv-body">

        <aside className="moderncv-left">

          <section>

            <h3>KEY ACHIEVEMENTS</h3>

            {achievements.map(item=>(

              <div key={item.id} className="moderncv-card">

                <div className="moderncv-icon">★</div>

                <div>

                  <strong>{item.title}</strong>

                  <p>{item.description}</p>

                </div>

              </div>

            ))}

          </section>

          <section>

            <h3>SKILLS</h3>

            <div className="moderncv-tags">

              {skills.map((skill,index)=>(

                <span key={index}>

                  {skill}

                </span>

              ))}

            </div>

          </section>

          <section>

            <h3>TRAINING / COURSES</h3>

            {certifications.map(course=>(

              <div key={course.id} className="moderncv-item">

                <strong>{course.name}</strong>

                <p>{course.issuer}</p>

              </div>

            ))}

          </section>

          <section>

            <h3>INTERESTS</h3>

            {interests.map(item=>(

              <div key={item.id} className="moderncv-card">

                <div className="moderncv-icon">✦</div>

                <div>

                  <strong>{item.title}</strong>

                  <p>{item.description}</p>

                </div>

              </div>

            ))}

          </section>

        </aside>

        <main className="moderncv-right">

          <section>

            <h3>SUMMARY</h3>

            <p>{summary}</p>

          </section>

          <section>

            <h3>EXPERIENCE</h3>

            {experience.map(job=>(

              <div key={job.id} className="moderncv-job">

                <div className="moderncv-job-header">

                  <div>

                    <h4>{job.title}</h4>

                    <span>{job.company}</span>

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

                  ))}

                </ul>

              </div>

            ))}

          </section>

          <section>

            <h3>EDUCATION</h3>

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

          <section>

            <h3>LANGUAGES</h3>

            <div className="moderncv-languages">

              {languages.map(lang=>(

                <div key={lang.id} className="moderncv-language">

                  <div>

                    {lang.name}

                  </div>

                  <div>

                    {lang.level}

                  </div>

                  <div className="moderncv-bar">

                    <div className="moderncv-fill"></div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </main>

      </div>

    </div>

  );

}