import React from "react";
import Spinner from "./Spinner";
import styled from "styled-components";
import { Container, Card, CardTitle, CardBody } from "reactstrap";

const NewCard = styled(Card)`
  max-width: 60%;
  background: white;
  border-radius: 2rem;
  margin: 5%;
  margin-left: 18%;
  box-shadow: 5px 10px #8c8284a1;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NewTitle = styled(CardTitle)`
  border-bottom: 2px dashed #f4ca78;
`;

const FriendView = props => {
  console.log(props, "props");
  return (
    <Container>
      <NewCard>
        <NewTitle>
          <h1>{props.name}</h1>
        </NewTitle>
        <CardBody>
          <p>Age: {props.age}</p>
          <p>Email: {props.email}</p>
        </CardBody>
      </NewCard>
    </Container>
  );
};

export default FriendView;
