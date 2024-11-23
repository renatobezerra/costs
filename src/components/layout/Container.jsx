import styles from "./Container.module.css";

function Container(props) {
  const customClasses =   props.customClass?.split(' ').map(cl => styles[cl]).join(' ');
  return (
    <>
      <div className={`${styles.container} ${customClasses}`}>
        {props.children}
      </div>
    </>
  );
}

export default Container;
