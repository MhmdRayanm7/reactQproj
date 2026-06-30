import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Frontend Quiz App</h1>
      <p>Study and test your Frontend knowledge</p>
    </header>
  );
}

export default Header;