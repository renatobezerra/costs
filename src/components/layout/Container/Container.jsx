import styles from "./Container.module.css";

function Container({ customClass, children}) {
  const customClasses = customClass?.split(' ').map(cl => styles[cl]).join(' ');
  return (
    <>
      <div className={`${styles.container} ${customClasses}`}>
        {children}
      </div>
    </>
  );
}

export default Container;
