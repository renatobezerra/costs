import { useState, useEffect } from 'react';
import Container from '../../components/layout/Container/Container';
import Loading from '../../components/layout/Loading/Loading';
import Message from '../../components/layout/Message/Message';
import LinkButton from '../../components/form/LinkButton';
import ProjectCard from './ProjectCard';
import { useLocation } from 'react-router-dom';
import styles from './ProjectList.module.css';

function ProjectList() {
  const location = useLocation();
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

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

  useEffect(() => {
    setProjectMessage(location?.state?.message);
  }, [location]);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json(0))
      .then(data => {
        setProjects(projects.filter(p => p.id !== data.id));
        setProjectMessage('Project was removed successfully !!!');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Projects</h1>
        <LinkButton to="/project/new" text="Criar Projeto" />
      </div>
      <div>
        <Message type='success' message={projectMessage}/>
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
                handleRemove={removeProject}
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
