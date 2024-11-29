import styles from "./ServiceForm.module.css";
import Input from "../../components/form/Input";
import Message from "../../components/layout/Message/Message";

function ServiceForm({ handleChange, errorMessage }) {
  function submit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <Message type='error' message={errorMessage} />
      <Input
        key="name"
        type="text"
        name="name"
        text="Name"
        placeholder="Type service name"
        handleOnChange={handleChange}
      />
      <Input
        key="description"
        type="text"
        name="description"
        text="Description"
        placeholder="Type service description"
        handleOnChange={handleChange}
      />
      <Input
        keys="cost"
        type="number"
        name="cost"
        text="Cost"
        placeholder="Type the service cost"
        handleOnChange={handleChange}
      />
    </form>
  );
}

export default ServiceForm;
