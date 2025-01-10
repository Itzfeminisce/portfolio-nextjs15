import ProjectCard from '@/components/ProjectCard';
// import { getProjects } from '@/app/api/projects';
import styles from '@/styles/ProjectsPage.module.css';
import { Metadata } from 'next';

const getProjects = async () => {
  const response = await fetch("http://localhost:3000/api/projects").then(res => res.json());
  return response
};

export const metadata: Metadata = {
  title: "Projects Page",
  description: "View projects.",
}


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
