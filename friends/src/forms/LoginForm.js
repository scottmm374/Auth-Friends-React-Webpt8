import React, { useState } from "react";
import api from "../utils/api";

function LoginForm(props) {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post("/api/login", user)
      .then(result => {
        localStorage.setItem("token", result.data.payload);
        props.history.push("/friends-list");
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  //   console.log(user, "user");
  return (
    <form onSubmit={handleSubmit}>
      {/* {error && <div className="error">{error}</div>} */}
      <input
        type="text"
        name="username"
        value={user.username}
        placeholder="Enter username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
