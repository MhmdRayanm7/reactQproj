import styles from "./question.module.css";

function QuestionScreen({
  question,
  mode,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  error,
  canGoBack,
  onSelectAnswer,
  onNext,
  onPrevious,
}) {
  const isStudyMode = mode === "study";
  const isAnswerSelected = selectedAnswer !== "";
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className={styles.questionBox}>
      <p className={styles.progress}>
        Question {currentIndex + 1} of {totalQuestions}
      </p>

      <h2>{question.question}</h2>

      {error !== "" && <p className={styles.error}>{error}</p>}

      <div className={styles.answers}>
        {question.answers.map((answer) => (
          <button
            key={answer}
            type="button"
            className={selectedAnswer === answer ? styles.selected : ""}
            onClick={() => onSelectAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>

      {isStudyMode && isAnswerSelected && (
        <div className={isCorrect ? styles.correctBox : styles.wrongBox}>
          <p>{isCorrect ? "Correct answer!" : "Wrong answer!"}</p>
          <p>{question.explanation}</p>
        </div>
      )}

      <div className={styles.actions}>
        {mode === "exam" && canGoBack && (
          <button
            className={styles.backButton}
            type="button"
            onClick={onPrevious}
          >
            Back
          </button>
        )}

        <button className={styles.nextButton} type="button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionScreen;