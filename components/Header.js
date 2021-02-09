import { useState } from "react";
import { postName } from "../data/services";
import { BLUE, LIGHTBLUE } from "../styles/consts";
import Link from "next/link";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  a {
    position: absolute;
    right: 2rem;
    top: 1rem;
    color: ${LIGHTBLUE};
    font-size: 0.8rem;
    text-decoration: underline 1px solid ${LIGHTBLUE};
  }
  h1 {
    padding-top: 2rem;
    color: ${BLUE};
  }

  h3 {
    font-style: italic;
    color: ${LIGHTBLUE};
  }

  input {
    border: 2px solid ${LIGHTBLUE};
    width: 10rem;
    padding: 0.5rem;
  }

  button {
    margin-left: 1rem;
    background: ${LIGHTBLUE};
    padding: 0.5rem;
    border: none;
    color: white;
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

      <Link href="https://github.com/manonxrray/argonaute">
        <a>Lien vers le repo github</a>
      </Link>

      <div>
        <h3>Ajouter un(e) argonaute</h3>
        <form onSubmit={handleSubmit}>
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
