import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../../components/project/ProjectForm";
import Message from "../../components/layout/Message/Message";
import styles from "./ProjectNew.module.css";

function ProjectNew() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function create(project){
    // Initialize costs and services
    project.cost = 0;
    project.services = []
    project.budget = parseFloat(project.budget);

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
        <h2>New Project</h2>
        <hr />
        <p>Create your project. You will be able to include services afterward</p>
        <ProjectForm handleSubmit={create} btnSave="Create" btnBack="Back" />
      </div>
    </>
  );
}

export default ProjectNew;
