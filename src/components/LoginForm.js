import React, { useState } from "react";
import { users } from "../data";
import "./Common.css";

function LoginForm({ handleLogin }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const handleChange = (evt) => {
    setError("");
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (_user) =>
        _user.email === credentials.email &&
        _user.password === credentials.password
    );

    if (user) {
      handleLogin();
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLogin", JSON.stringify(true));
    } else {
      setError("Please check your credentials!!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <p className="error">{error}</p>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          value={credentials.email}
          name="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          value={credentials.password}
          name="password"
          onChange={handleChange}
          required
        />

        <input type={"submit"} value={"Login"} className="form-submit-button" />
      </form>
    </div>
  );
}

export default LoginForm;
