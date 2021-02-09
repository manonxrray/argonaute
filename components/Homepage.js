import styled from "@emotion/styled";
import { LIGHTBEIGE } from "../styles/consts";

import Header from "./Header";
import Body from "./Body";

const StyledHome = styled.div`
  text-align: center;
  height: 100vh;
  margin-top: -1.5rem;
`;

export default function Homepage() {
  return (
    <StyledHome>
      <Header />

      <Body />
    </StyledHome>
  );
}
