import { useState } from "react";
import Header from "../components/header/Header";
import LoginScreen from "../components/login/LoginScreen";
import SetupScreen from "../components/setup/SetupScreen";
import { questions } from "../data/questions";
import { prepareSessionQuestions } from "../utils/questionUtils";
import styles from "./app.module.css";

function App() {
  const [user, setUser] = useState(null);
  const [quizSettings, setQuizSettings] = useState(null);
  const [sessionQuestions, setSessionQuestions] = useState([]);

  function handleLogin(userData) {
    setUser(userData);
  }

  function handleStart(settings) {
    const preparedQuestions = prepareSessionQuestions(
      questions,
      settings.topics,
      settings.mode
    );

    setQuizSettings(settings);
    setSessionQuestions(preparedQuestions);
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
          <div>
            <p>
              Started {quizSettings.mode} with: {quizSettings.topics.join(", ")}
            </p>

            <p>Questions in this round: {sessionQuestions.length}</p>

            {sessionQuestions.length > 0 && (
              <p>First question: {sessionQuestions[0].question}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;