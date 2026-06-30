import styles from "./summary.module.css";

function SummaryScreen({ user, mode, userAnswers }) {
  const correctCount = userAnswers.filter(
    (answer) => answer.selectedAnswer === answer.correctAnswer
  ).length;

  const wrongCount = userAnswers.length - correctCount;
  const score = correctCount * 20;

  return (
    <div className={styles.summary}>
      <h2>Summary</h2>

      <p>Hello, {user.fullName}</p>

      {mode === "exam" ? (
        <p className={styles.score}>Your score: {score}/100</p>
      ) : (
        <p className={styles.score}>Study round finished</p>
      )}

      <div className={styles.results}>
        <p>Correct answers: {correctCount}</p>
        <p>Wrong answers: {wrongCount}</p>
      </div>
    </div>
  );
}

export default SummaryScreen;