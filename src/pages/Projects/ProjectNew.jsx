import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../../components/project/ProjectForm";
import Message from "../../components/layout/Message/Message";
import styles from "./ProjectNew.module.css";

function ProjectNew() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function createPost(project){
    // Initialize costs and services
    project.cost = 0;
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(data => {
        navigate('/project', {
            state: {
            status: 'success',
            message: 'The project was created successfully'
          }
        });
      })
      .catch(err => {
        setError(`Error during create project: ${err.message}`);
        console.log(err)
      });
  }

  return (
    <>
      {
        error && (
          <Message type="error" message={error}/>
        )
      }
      <div className={styles.projectNewContainer}>
        <h1>New Project</h1>
        <p>Crie seu projeto. Após, será possível incluir serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Create" />
      </div>
    </>
  );
}

export default ProjectNew;
