import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Message from '../../components/layout/Message/Message';
import styles from './ProjectEdit.module.css';
import ProjectForm from '../../components/project/ProjectForm';

function ProjectEdit() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [projectMessage, setProjectMessage] = useState('');
  const [error, setError] = useState('');
  const [project, setProject] = useState({});

  function update(project) {
    project.budget = parseFloat(project.budget);

    if(project.budget < project.cost) {
      setError(`The budget cannot be less than costs`);
      return;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(data => {
        navigate('/project', {
            state: {
            status: 'success',
            message: 'The project was edited successfully'
          }
        });
      })
      .catch(error => {
        setError(`Error during update project: ${error.message}`);
      });
  }

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
          setProject(data);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className={styles.projectEditContainer}>
      <h2>Project Edit</h2>
      <hr />
      <Message type="warn" message={projectMessage}/>
      <Message type="error" message={error}/>
      <ProjectForm btnSave="Save Edit" btnBack="Back" projectData={project} handleSubmit={update} />
    </div>
  );
}

export default ProjectEdit;
