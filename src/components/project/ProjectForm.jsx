import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData ?? {});

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

  return (
    <form onSubmit={submit} className={styles.form}>
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
      <SubmitButton name="projectSubmit" text={btnText} />
    </form>
  );
}

export default ProjectForm;
