import { useState } from "react";

const users = [
  {
    email: "mohankunjam25@navgurukul.org",
    password: "admin@123",
    role: "Admin",
  },

  {
    email: "mohankunjam26@navgurukul.org",
    password: "student@123",
    role: "Student",
  },
];
export default function App(){
  return(
    <div>
      <Login />
    </div>
  )
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const user = users.find(
      (candidate) =>
        candidate.email === email && candidate.password === password,
    );

    setMessage(
      user
        ? `Login successful. Welcome, ${user.role}!`
        : "Invalid email or password.",
    );
  }

  return (
    <main>
      <form onSubmit={handleLogin}>
        <h1 >Welcome back</h1>
        <p>Sign in to your account</p>

        <label htmlFor="email" >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="username"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">
          Log in
        </button>
        {message && (
          <p role="status">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}