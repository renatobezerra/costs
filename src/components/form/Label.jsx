import styles from "./Label.module.css";

function Label({ text, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={text}>{text}:</label>
      <span>{value}</span>
    </div>
  );
}

export default Label;
