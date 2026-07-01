import { useState } from "react";
import Header from "../components/header/Header";
import LoginScreen from "../components/login/LoginScreen";
import SetupScreen from "../components/setup/SetupScreen";
import QuestionScreen from "../components/question/QuestionScreen";
import SummaryScreen from "../components/summary/SummaryScreen";
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

  function handleBackToLogin() {
    setUser(null);
    setQuizSettings(null);
    setSessionQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setQuestionError("");
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

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = answerData;

    const nextIndex = currentIndex + 1;

    setUserAnswers(updatedAnswers);
    setQuestionError("");
    setCurrentIndex(nextIndex);

    if (nextIndex < sessionQuestions.length && updatedAnswers[nextIndex]) {
      setSelectedAnswer(updatedAnswers[nextIndex].selectedAnswer);
    } else {
      setSelectedAnswer("");
    }
  }

  function handlePreviousQuestion() {
    if (currentIndex === 0) {
      return;
    }

    const previousIndex = currentIndex - 1;
    const previousAnswer = userAnswers[previousIndex];

    setCurrentIndex(previousIndex);
    setQuestionError("");

    if (previousAnswer) {
      setSelectedAnswer(previousAnswer.selectedAnswer);
    } else {
      setSelectedAnswer("");
    }
  }


  function handleRetry() {
      if (quizSettings === null) {
    return;
    }
    const preparedQuestions = prepareSessionQuestions(
      questions,
      quizSettings.topics,
      quizSettings.mode
    );

    setSessionQuestions(preparedQuestions);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setQuestionError("");
  }

  function handleChooseAgain() {
    setQuizSettings(null);
    setSessionQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setQuestionError("");
  }

  const hasUser = user !== null;
  const hasSettings = quizSettings !== null;
    return (
    <div className={styles.app}>
      <div className={styles.card}>
        <Header />

        {!hasUser ? (
          <LoginScreen onLogin={handleLogin} />
        ) : !hasSettings ? (
          <SetupScreen
            user={user}
            onStart={handleStart}
            onBackToLogin={handleBackToLogin}
          />
        ) : currentIndex >= sessionQuestions.length ? (
          <SummaryScreen
            user={user}
            mode={quizSettings.mode}
            userAnswers={userAnswers}
            onRetry={handleRetry}
            onChooseAgain={handleChooseAgain}
          />
        ) : (
          <QuestionScreen
            question={sessionQuestions[currentIndex]}
            mode={quizSettings.mode}
            currentIndex={currentIndex}
            totalQuestions={sessionQuestions.length}
            selectedAnswer={selectedAnswer}
            error={questionError}
            canGoBack={currentIndex > 0}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
          />
        )}
      </div>
    </div>
  );
  
}

export default App;