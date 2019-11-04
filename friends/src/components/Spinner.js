import React from "react";
import { Spinner } from "reactstrap";

const Loading = props => {
  return (
    <div>
      <Spinner type="grow" color="info" />
      {/* <Spinner type="grow" color="dark" /> */}
    </div>
  );
};

export default Loading;
