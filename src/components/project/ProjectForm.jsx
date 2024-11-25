import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input type="text" text="Nome do Projeto" name="project_name" placeholder="Insira o nome do projeto"/>
      <Input type="text" text="Orçamento do Projeto" name="project_budget" placeholder="Insira o orçamento total"/>
      <Select name="categoryId" text="Selecione uma categoria" />
      <SubmitButton name="projectSubmit" text={btnText}/>
    </form>
  );
}

export default ProjectForm;
