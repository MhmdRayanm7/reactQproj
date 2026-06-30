import { useState } from "react";
import styles from "./login.module.css";

function LoginScreen({ onLogin }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (fullName.trim() === "" || phone.trim() === "" || email.trim() === "") {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    onLogin({
      fullName: fullName,
      phone: phone,
      email: email,
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Login / Register</h2>

      {error !== "" && <p className={styles.error}>{error}</p>}

      <label>
        Full Name
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Enter your full name"
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Enter your phone"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
      </label>

      <button type="submit">Continue</button>
    </form>
  );
}

export default LoginScreen;