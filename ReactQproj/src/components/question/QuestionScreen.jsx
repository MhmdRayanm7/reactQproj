import styles from "./question.module.css";

function QuestionScreen({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  error,
  onSelectAnswer,
  onNext,
}) {
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

      {selectedAnswer !== "" && (
        <p className={styles.selectedText}>You selected: {selectedAnswer}</p>
      )}

      <button className={styles.nextButton} type="button" onClick={onNext}>
        Next
      </button>
    </div>
  );
}

export default QuestionScreen;