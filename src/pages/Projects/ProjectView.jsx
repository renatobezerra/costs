import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import styles from "./ProjectView.module.css";
import LinkButton from "../../components/form/LinkButton";
import Label from "../../components/form/Label";
import ServiceList from "../Services/ServiceList";

function ProjectView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(error => console.log(error));
  });

  function back(){
    navigate(-1);
  }

  return (
    <div className={ styles.projectViewContainer }>
      <div className={ styles.titleContainer }>
        <h2>Project: Project Xpto</h2>
        <div>
          <LinkButton to={`/project/edit/${id}`} text="Edit"></LinkButton>
          <button type="button" className={styles.default} onClick={back} ><BsArrowReturnLeft /> Back</button>
        </div>
      </div>
      <div className={ styles.infoContainer }>
        <Label text="Category" value={ project?.category?.name } key="category" type="row"/>
        <Label text="Budget" value={ project?.budget } key="budget" type="row"/>
        <Label text="Total Costs" value={ project?.cost } key="costs" type="row"/>
      </div>
      <br/>
      <div className={ styles.infoContainer }>
        <ServiceList projectData={project} />
      </div>
    </div>
  );
}

export default ProjectView;
