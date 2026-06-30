/**
 * Returns only questions from the topics selected by the user.
 */
export function getQuestionsByTopics(allQuestions, selectedTopics) {
  return allQuestions.filter((question) =>
    selectedTopics.includes(question.topic)
  );
}