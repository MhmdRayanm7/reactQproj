/**
 * Returns only questions from the topics selected by the user.
 */
export function getQuestionsByTopics(allQuestions, selectedTopics) {
  return allQuestions.filter((question) =>
    selectedTopics.includes(question.topic)
  );
}

/**
 * Returns a new shuffled copy of an array.
 */
export function shuffleArray(array) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temp;
  }

  return shuffledArray;
}

/**
 * Returns questions with shuffled answers.
 */
export function shuffleAnswersInQuestions(questions) {
  return questions.map((question) => {
    return {
      ...question,
      answers: shuffleArray(question.answers),
    };
  });
}

/**
 * Prepares the questions for study or exam mode.
 */
export function prepareSessionQuestions(allQuestions, selectedTopics, mode) {
  const filteredQuestions = getQuestionsByTopics(allQuestions, selectedTopics);
  const shuffledQuestions = shuffleArray(filteredQuestions);
  const questionsWithShuffledAnswers = shuffleAnswersInQuestions(shuffledQuestions);

  if (mode === "exam") {
    return questionsWithShuffledAnswers.slice(0, 5);
  }

  return questionsWithShuffledAnswers;
}