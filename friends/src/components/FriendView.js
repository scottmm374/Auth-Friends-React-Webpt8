import React from "react";

const FriendView = props => {
  console.log(props, "props");
  return (
    <div>
      <p>
        {props.name}
        {props.email}
      </p>
    </div>
  );
};

export default FriendView;
