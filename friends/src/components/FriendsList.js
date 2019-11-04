import React, { useEffect, useState } from "react";
import api from "../utils/api";
import FriendView from "./FriendView";
// import axios from "axios";

function FriendsList() {
  const [friend, setfriend] = useState([]);

  useEffect(() => {
    api()
      .get("/api/friends")
      .then(res => {
        setfriend(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(friend, "friend");
  return (
    <div>
      {friend.map(friend => {
        <div key={friend.id}>
          <FriendView name={friend.name} email={friend.email} />
        </div>;
      })}
    </div>
  );
}

export default FriendsList;
