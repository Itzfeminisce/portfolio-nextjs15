import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.tsx" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.tsx" path="/projects" />
      <Tab icon="/json_icon.svg" filename="resume.pdf" path="/resume" />
      <Tab icon="/markdown_icon.svg" filename="github.mdx" path="/github" />
    </div>
  );
};

export default Tabsbar;
