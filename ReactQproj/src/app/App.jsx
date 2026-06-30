import { useState } from "react";
import Header from "../components/header/Header";
import LoginScreen from "../components/login/LoginScreen";
import SetupScreen from "../components/setup/SetupScreen";
import QuestionScreen from "../components/question/QuestionScreen";
import { questions } from "../data/questions";
import { prepareSessionQuestions } from "../utils/questionUtils";
import styles from "./app.module.css";

function App() {
  const [user, setUser] = useState(null);
  const [quizSettings, setQuizSettings] = useState(null);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [questionError, setQuestionError] = useState("");

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
    setCurrentIndex(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setQuestionError("");
  }

  function handleSelectAnswer(answer) {
    setSelectedAnswer(answer);
    setQuestionError("");
  }

  function handleNextQuestion() {
    if (selectedAnswer === "") {
      setQuestionError("Please choose an answer first");
      return;
    }

    const currentQuestion = sessionQuestions[currentIndex];

    const answerData = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
    };

    setUserAnswers([...userAnswers, answerData]);
    setSelectedAnswer("");
    setQuestionError("");
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <Header />

        {user === null ? (
          <LoginScreen onLogin={handleLogin} />
        ) : quizSettings === null ? (
          <SetupScreen user={user} onStart={handleStart} />
        ) : currentIndex >= sessionQuestions.length ? (
          <p>Finished round. Answers saved: {userAnswers.length}</p>
        ) : (
          <QuestionScreen
            question={sessionQuestions[currentIndex]}
            currentIndex={currentIndex}
            totalQuestions={sessionQuestions.length}
            selectedAnswer={selectedAnswer}
            error={questionError}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNextQuestion}
          />
        )}
      </div>
    </div>
  );
}

export default App;