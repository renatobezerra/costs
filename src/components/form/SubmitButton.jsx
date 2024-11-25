import styles from "./SubmitButton.module.css";

function SubmitButton({ text, name }) {
  return (
    <div>
      <button id="name" className={styles.btn}>{ text }</button>
    </div>
  );
}

export default SubmitButton;
