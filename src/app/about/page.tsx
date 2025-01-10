import Image from "next/image";
import styles from "../../styles/About.module.css";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={"/profile.png"}
              alt="About Me"
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>Fullstack Engineer</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>Name: </strong>
                  Rotimi Oluwafemi
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Nationality: </strong>
                  Nigeria 🇳🇬
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>College Degree: </strong>
                  Mechanical Engineering (HND)
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Availability: </strong>
                  Freelance, Remote, Contract & Hybrid
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
          I am a highly motivated Fullstack Engineer seeking a remote opportunity in the tech industry. With a strong foundation in web development, I aim to leverage my skills to contribute to your organization's success and drive increased profitability through innovative solutions.
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h2 className={styles.skillsSection2}>
            <span>Skills Summary</span>
          </h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>Frontend Development</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "89%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Backend Development</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Project Management</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Version Control:</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>DevOps & Deployment:</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Testing & Debugging:</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Collaboration & Agile Practices:</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Soft Skills:</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>


          <div>
            <h2 className={styles.skillsSection2}>
              <span>Course & Certifications</span>
            </h2>
            <div className={styles.courseGrid}>

              <div className={styles.textContainer}>
                <h3 className={styles.textHead}>Ultimate AWS Certified Developer Associate</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      <strong className={styles.strong}>Institution: </strong>
                      Udemy (Stephane Maarek)
                    </span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      {" "}
                      <strong className={styles.strong}>Certificate: </strong>
                      <a target="_blank" rel="noopener noreferrer">In View</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textHead}>AWS Certified DevOps Engineer Profesional</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      <strong className={styles.strong}>Institution: </strong>
                      Udemy (Stephane Maarek)
                    </span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      {" "}
                      <strong className={styles.strong}>Certificate: </strong>
                      <a target="_blank" rel="noopener noreferrer">In View</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textHead}>Intro. To User Experience Design</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      <strong className={styles.strong}>Institution: </strong>
                      Cousera (Dr. Rosa I. Arriaga)
                    </span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      {" "}
                      <strong className={styles.strong}>Certificate: </strong>
                      <a href="https://www.coursera.org/account/accomplishments/verify/4E3V55VVT6FT" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textHead}>Intro. to Software Engineering</h3>
                 <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      <strong className={styles.strong}>Institution: </strong>
                      Cousera (Rav Ahuja, Bethany Hudnutt)
                    </span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i>
                    <span>
                      {" "}
                      <strong className={styles.strong}>Certificate: </strong>
                      <a href="https://www.coursera.org/account/accomplishments/verify/A5VAYU4YGMR9" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

<br />
<br />


          {/* languages */}
          {/*  id="skills" */}
          <section>
            <h2 className={styles.skillsSection2}>
              <span>Languages.</span>
            </h2>
            <div className={styles.skills}>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                  alt="Skill 1"
                />
                <p>HTML</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                  alt="Skill 2"
                />
                <p>CSS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="Skill 3"
                />
                <p>JAVASCRIPT</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  alt="Skill 3"
                />
                <p>PHP</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                  alt="Skill 3"
                />
                <p>MySQL</p>
              </div>
            </div>
          </section>

          {/* Frameworks */}
          {/*  id="skills" */}
          <section>
            <h2 className={styles.skillsSection2}>
              <span>Frameworks.</span>
            </h2>
            <div className={styles.skills}>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="Skill 3"
                />
                <p>REACT JS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Skill 3"
                />
                <p>NEXT JS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Skill 3"
                />
                <p>TAILWIND</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <p>EXPRESS JS</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                <p>LARAVEL</p>
              </div>
            </div>
          </section>


          {/* Version Control */}
          {/*  id="skills" */}
          <section>
            <h2 className={styles.skillsSection2}>
              <span>Version Control.</span>
            </h2>
            <div className={styles.skills}>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Skill 3"
                />
                <p>GITHUB</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <p>GIT</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" />
                <p>BitBucket</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
                <p>GitLab</p>
              </div>
            </div>
          </section>

          {/* Cloud Tools */}
          {/*  id="skills" */}
          <section>
            <h2 className={styles.skillsSection2}>
              <span>Cloud Tools.</span>
            </h2>
            <div className={styles.skills}>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                  alt="skill3"
                />

                <p>AWS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
                  alt="skill3"
                />

                <p>GOOGLE CLOUD</p>
              </div>
            </div>
          </section>
          {/* Cloud Tools */}
          {/*  id="skills" */}
          <section>
            <h2 className={styles.skillsSection2}>
              <span>Runtime.</span>
            </h2>
            <div className={styles.skills}>

              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Skill 3"
                />
                <p>NODE JS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg"
                  alt="Skill 3"
                />
                <p>Bun</p>
              </div>
            </div>
          </section>


          {/* Other Tools */}
          {/*  id="skills" */}
          <section>
            <h2 className={styles.skillsSection2}>
              <span>I also use.</span>
            </h2>
            <div className={styles.skills}>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                  alt="Skill 3"
                />
                <p>MONGO DB</p>
              </div>

              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                  alt="Skill 3"
                />
                <p>PRISMA</p>
              </div>

              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
                  alt="Skill 3"
                />
                <p>VITE JS</p>
              </div>

              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                <p>BASH</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                <p>DOCKER</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <p>NPM</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  alt="Skill 3"
                />
                <p>BOOTSTRAP</p>
              </div>


              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />
                <p>DISCORD JS</p>
              </div>

              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
                <p>DEVICON</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <p>VS CODE</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                  alt="Skill 3"
                />
                <p>WORDPRESS</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <p>FIGMA</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />
                <p>ILLUSTRATOR</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />
                <p>CANVA</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
// export async function getStaticProps() {
//   return {
//     props: { title: "About" },
//   };
// }
