import styles from "./styles.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInformation}>
          <h3>HenriDev</h3>
          <p>Blog pessoal onde vou publicar algumas coisas sobre progamação.</p>
        </div>
        <div className={styles.footerIcons}>
          <a
            className={styles.social}
            href="https://www.linkedin.com/in/henrique-moreira-310106231/"
          >
            <BsLinkedin color="#fff" size={24} />
          </a>
          <a
            className={styles.social}
            href="https://github.com/HenriqueMoreira-1"
          >
            <BsGithub color="#fff" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
