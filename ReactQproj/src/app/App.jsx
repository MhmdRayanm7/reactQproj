import { useState } from "react";
import Header from "../components/header/Header";
import LoginScreen from "../components/login/LoginScreen";
import SetupScreen from "../components/setup/SetupScreen";
import { questions } from "../data/questions";
import { getQuestionsByTopics } from "../utils/questionUtils";
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

  const selectedQuestions =
    quizSettings === null
      ? []
      : getQuestionsByTopics(questions, quizSettings.topics);

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <Header />

        {user === null ? (
          <LoginScreen onLogin={handleLogin} />
        ) : quizSettings === null ? (
          <SetupScreen user={user} onStart={handleStart} />
        ) : (
          <div>
            <p>
              Started {quizSettings.mode} with: {quizSettings.topics.join(", ")}
            </p>

            <p>Questions found: {selectedQuestions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;