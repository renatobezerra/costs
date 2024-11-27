import Container from '../../components/layout/Container/Container';
import Message from '../../components/layout/Message/Message';
import LinkButton from '../../components/form/LinkButton';
import { useLocation } from 'react-router-dom';
import styles from './ProjectList.module.css';

function ProjectList() {
  const location = useLocation();

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <Message type='success' message={location?.state?.message}/>
        <h1>Projects</h1>
        <LinkButton to="/project/new" text="Criar Projeto" />
      </div>
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
}

export default ProjectList;
