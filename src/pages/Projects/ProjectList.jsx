import { useState, useEffect } from 'react';
import Container from '../../components/layout/Container/Container';
import Message from '../../components/layout/Message/Message';
import LinkButton from '../../components/form/LinkButton';
import ProjectCard from './ProjectCard';
import { useLocation } from 'react-router-dom';
import styles from './ProjectList.module.css';

function ProjectList() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      })
      .catch(err => console.log(err));
  });

  const location = useLocation();

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <Message type='success' message={location?.state?.message}/>
        <h1>Projects</h1>
        <LinkButton to="/project/new" text="Criar Projeto" />
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
      </Container>
    </div>
  );
}

export default ProjectList;
