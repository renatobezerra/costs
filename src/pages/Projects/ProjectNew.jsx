import ProjectForm from '../../components/project/ProjectForm';
import styles from './ProjectNew.module.css';

function ProjectNew() {
    return (
      <div className={styles.projectNewContainer}>
        <h1>New Project</h1>
        <p>Crie seu projeto. Após, será possível incluir serviços</p>
        <ProjectForm btnText="Create"/>
      </div>
    );
}

export default ProjectNew;
