import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/ProjectsPage.module.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Projects Page",
  description: "View projects.",
}

export const dynamic = 'force-dynamic'

const getProjects = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/projects`).then(res => res.json());
  return response
};


const ProjectsPage = async () => {
  const projects = await getProjects()
  return (
    <>
      <h3>Some Stuffs I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};


export default ProjectsPage;
