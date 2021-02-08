import { useEffect, useState } from "react";
import { getAllNames } from "../data/services";
import styled from "@emotion/styled";

const StyledBody = styled.main`
  ul {
    list-style: none;
    column-count: 3;
  }
`;

export default function Body() {
  const [allNames, setAllNames] = useState([]);

  function fetchNames() {
    getAllNames().then((res) => {
      setAllNames(res.data);
    });
  }

  useEffect(() => {
    console.log("Names rendered");
    fetchNames();
  }, []);

  return (
    <StyledBody>
      <div>
        <h2>Membres de l'équipage</h2>
        <ul>
          {allNames.map((argonaute) => (
            <li key={argonaute._id}>{argonaute.name}</li>
          ))}
        </ul>
      </div>
    </StyledBody>
  );
}
