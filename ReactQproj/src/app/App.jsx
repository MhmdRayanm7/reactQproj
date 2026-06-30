import { useState } from "react";
import Header from "../components/header/Header";
import LoginScreen from "../components/login/LoginScreen";
import styles from "./app.module.css";

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
  }

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <Header />

        {user === null ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <p>Welcome, {user.fullName}</p>
        )}
      </div>
    </div>
  );
}

export default App;