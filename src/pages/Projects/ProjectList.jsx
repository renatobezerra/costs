import { useState, useEffect } from 'react';
import Container from '../../components/layout/Container/Container';
import Loading from '../../components/layout/Loading/Loading';
import Message from '../../components/layout/Message/Message';
import LinkButton from '../../components/form/LinkButton';
import ProjectCard from './ProjectCard';
import { useLocation } from 'react-router-dom';
import styles from './ProjectList.module.css';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch(error => {
          setErrorMessage(`Error during load projetcs: ${error.message}`)
          console.log(error);
        });
    }
    loadData();
  });

  const location = useLocation();

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Projects</h1>
        <LinkButton to="/project/new" text="Criar Projeto" />
      </div>
      <div>
        <Message type='success' message={location?.state?.message}/>
        <Message type='error' message={errorMessage}/>
      </div>
      <Container customClass="start">
        {
          projects.length > 0 && (
            projects.map(project => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                />
            ))
          )
        }
        { !removeLoading && ( <Loading /> ) }
        { removeLoading && projects.length === 0 && (
          <p>There are no projects registered 😵‍💫</p>
        )}
      </Container>
    </div>
  );
}

export default ProjectList;
