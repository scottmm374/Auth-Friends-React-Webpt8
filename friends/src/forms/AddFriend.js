import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import styled from "styled-components";
import api from "../utils/api";

const NewCont = styled(Container)`
  max-width: 40%;
  margin-top: 5%;
`;

function AddFriend(props) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post("/api/friends", newFriend)
      .then(result => {
        console.log(result);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
    setNewFriend({ name: "", age: "", email: "" });
  };

  console.log(newFriend, "user");
  return (
    <NewCont>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            value={newFriend.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="age"
            value={newFriend.age}
            placeholder="Enter Age"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            name="email"
            value={newFriend.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </FormGroup>

        <Button size="lg" type="submit">
          Add Friend
        </Button>
      </Form>
    </NewCont>
  );
}

export default AddFriend;
