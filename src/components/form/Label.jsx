import styles from "./Label.module.css";

function Label({ text, value, type='column' }) {
  return (
    <div className={`${styles.formControl} ${styles[type] ?? ''}`}>
      <label htmlFor={text}>{text}:</label>
      <span>{value}</span>
    </div>
  );
}

export default Label;
