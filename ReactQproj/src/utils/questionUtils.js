/**
 * Returns only questions from the topics selected by the user.
 */
export function getQuestionsByTopics(allQuestions, selectedTopics) {
  return allQuestions.filter((question) =>
    selectedTopics.includes(question.topic)
  );
}

/**
 * Returns a new shuffled copy of the questions array.
 */
export function shuffleQuestions(questions) {
  const shuffledQuestions = [...questions];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = shuffledQuestions[i];
    shuffledQuestions[i] = shuffledQuestions[randomIndex];
    shuffledQuestions[randomIndex] = temp;
  }

  return shuffledQuestions;
}

/**
 * Prepares the questions for study or exam mode.
 */
export function prepareSessionQuestions(allQuestions, selectedTopics, mode) {
  const filteredQuestions = getQuestionsByTopics(allQuestions, selectedTopics);
  const shuffledQuestions = shuffleQuestions(filteredQuestions);

  if (mode === "exam") {
    return shuffledQuestions.slice(0, 5);
  }

  return shuffledQuestions;
}