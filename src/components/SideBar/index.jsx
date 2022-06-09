import styles from "./styles.module.scss";

const SideBar = () => {
  return (
    <aside className={styles.asideContainer}>
      <div className={styles.asideContent}>
        <section className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisar..." />
          <button>Pesquisar</button>
        </section>
        <section className={styles.asideADS}>
          <img src="/img/Leaderboard Ad (1).png" />
          <img src="/img/Leaderboard Ad (2).png" />
          <img src="/img/Leaderboard Ad (3).png" />
        </section>
        <section className={styles.asideRecentPosts}>
          <h3>Posts Recentes</h3>
          <div className={styles.borderBottom}></div>
          <ul>
            <li>Boas práticas para devs em início de carreira</li>
            <li>Desenvolvendo uma web acessível</li>
            <li>Do back ao mobile: de onde surgiu a programação fullstack</li>
            <li>Como personalizar o seu perfil no Github</li>
            <li>E-book Grátis Front-end como começar?</li>
          </ul>
        </section>
      </div>
    </aside>
  );
};

export default SideBar;
