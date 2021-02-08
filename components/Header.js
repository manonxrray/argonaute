import { useState } from "react";
import { postName } from "../data/services";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  h1 {
    padding-top: 2rem;
  }
`;

export default function Header() {
  const [name, setName] = useState("");

  function handleNewName(event) {
    console.log("Name registered :", event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    postName(name).then((res) => {
      console.log(res.data);
      setName("");
    });
  }

  return (
    <StyledHeader>
      <h1>Les Argonautes</h1>
      <div>
        <h2>Ajouter un(e) argonaute</h2>
        <form onSubmit={handleSubmit}>
          <label>Nom de l'argonaute</label>
          <input
            type="text"
            placeholder="Roger"
            value={name}
            onChange={handleNewName}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </StyledHeader>
  );
}
