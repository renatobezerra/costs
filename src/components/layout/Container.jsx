import styles from "./Container.module.css";
import Footer from "./Footer";

function Container(props) {
  return (
    <>
      <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Container;
