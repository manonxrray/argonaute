import { useState } from "react";
import { postName } from "../data/services";
import styled from "@emotion/styled";
import { LIGHTBEIGE } from "../styles/consts";

import Header from "./Header";
import Body from "./Body";

const StyledHome = styled.div`
  text-align: center;
  background: ${LIGHTBEIGE};
  height: 100vh;
  margin-top: -1.5rem;
`;

export default function Homepage() {
  const [name, setName] = useState("");

  function handleNewName(event) {
    console.log("Name registered :", event.target.value);
    setName(event.target.value);
  }

  function handleSubmit() {
    postName(name);
  }

  return (
    <StyledHome>
      <Header
        handleNewName={handleNewName}
        handleSubmit={handleSubmit}
        name={name}
      />

      <Body />
    </StyledHome>
  );
}
