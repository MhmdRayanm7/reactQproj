import { useState } from "react";
import Header from "../components/header/Header";
import LoginScreen from "../components/login/LoginScreen";
import SetupScreen from "../components/setup/SetupScreen";
import styles from "./app.module.css";

function App() {
  const [user, setUser] = useState(null);
  const [quizSettings, setQuizSettings] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
  }

  function handleStart(settings) {
    setQuizSettings(settings);
  }

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <Header />

        {user === null ? (
          <LoginScreen onLogin={handleLogin} />
        ) : quizSettings === null ? (
          <SetupScreen user={user} onStart={handleStart} />
        ) : (
          <p>
            Started {quizSettings.mode} with: {quizSettings.topics.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;