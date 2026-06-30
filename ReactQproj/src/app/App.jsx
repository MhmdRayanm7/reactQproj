import Header from "../components/header/Header";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <Header />
      </div>
    </div>
  );
}

export default App;