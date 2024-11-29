import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Input from "../form/Input";
import Label from "../form/Label";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";


function ProjectForm({ btnSave, btnBack, handleSubmit, projectData }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setProject(projectData);
  }, [projectData])

  function submit(e) {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function back(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      {
        !!projectData?.id && (
          <Label text="Cod" value={projectData.id} />
        )
      }
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project?.name ?? ''}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        step=".01"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project?.budget ?? ''}
      />
      <Select
        name="categoryId"
        text="Selecione uma categoria"
        options={categories}
        handleOnChange={handleSelect}
        value={project?.category?.id ?? ""}
      />
      {
        !!projectData?.id && (
          <Label text="Cost" value={projectData?.cost ?? 0} />
        )
      }
      <div className={ styles.actions }>
        <SubmitButton name="projectSubmit" text={btnSave} />
        {
          btnBack && (
            <button className={ styles.back } onClick={back}>{btnBack}</button>
          )
        }
      </div>
    </form>
  );
}

export default ProjectForm;
