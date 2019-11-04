import React, { useState } from "react";
import api from "../utils/api";

function AddFriend() {
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
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
    setNewFriend({ name: "", age: "", email: "" });
  };

  console.log(newFriend, "user");
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={newFriend.age}
        placeholder="Enter Age"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={newFriend.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
}

export default AddFriend;
