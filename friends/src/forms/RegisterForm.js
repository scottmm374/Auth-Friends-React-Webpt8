import React, { useState } from "react";
import api from "../utils/api";

function RegisterForm() {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post("/api/login", user)
      .then(result => {
        localStorage.setItem("token", result.data.token);
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  console.log(user, "user");
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={user.age}
        placeholder="Enter Age"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
