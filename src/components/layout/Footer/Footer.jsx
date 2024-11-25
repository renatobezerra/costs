import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.socialList}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className={styles.copy}>
          <span>Projects Costs</span> &copy; {new Date().getFullYear()}
        </p>
    </footer>
  );
}

export default Footer;
