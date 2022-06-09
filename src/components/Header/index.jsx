import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <span>HenriDev</span>
        </Link>
        <nav>
          <a>Home</a>
          <a>Back-end</a>
          <a>Front-end</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
