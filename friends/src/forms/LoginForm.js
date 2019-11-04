import React, { useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from "reactstrap";
import styled from "styled-components";
import api from "../utils/api";

const NewCont = styled(Container)`
  max-width: 40%;
  margin-top: 5%;
`;

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
        props.history.push("/friends");
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  return (
    <NewCont>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter username"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </FormGroup>

        <Button size="lg" type="submit">
          Login
        </Button>
      </Form>
    </NewCont>
  );
}

export default LoginForm;
