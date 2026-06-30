import { useState } from "react";
import styles from "./setup.module.css";

const topics = ["JavaScript", "React", "HTML", "CSS"];

function SetupScreen({ user, onStart }) {
  const [mode, setMode] = useState("study");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [error, setError] = useState("");

  function handleTopicChange(topic) {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((item) => item !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedTopics.length === 0) {
      setError("Please choose at least one topic");
      return;
    }

    setError("");

    onStart({
      mode: mode,
      topics: selectedTopics,
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Hello, {user.fullName}</h2>
      <p>Choose how you want to practice.</p>

      {error !== "" && <p className={styles.error}>{error}</p>}

      <div className={styles.section}>
        <h3>Choose mode</h3>

        <label>
          <input
            type="radio"
            name="mode"
            value="study"
            checked={mode === "study"}
            onChange={(event) => setMode(event.target.value)}
          />
          Study Mode
        </label>

        <label>
          <input
            type="radio"
            name="mode"
            value="exam"
            checked={mode === "exam"}
            onChange={(event) => setMode(event.target.value)}
          />
          Exam Mode
        </label>
      </div>

      <div className={styles.section}>
        <h3>Choose topics</h3>

        {topics.map((topic) => (
          <label key={topic}>
            <input
              type="checkbox"
              checked={selectedTopics.includes(topic)}
              onChange={() => handleTopicChange(topic)}
            />
            {topic}
          </label>
        ))}
      </div>

      <button type="submit">Start</button>
    </form>
  );
}

export default SetupScreen;