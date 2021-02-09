import { useEffect, useState } from "react";
import { getAllNames } from "../data/services";
import { BLUE, PALEBLUE } from "../styles/consts";
import styled from "@emotion/styled";

const StyledBody = styled.main`
  h2 {
    color: ${BLUE};
    text-decoration: underline 2px solid ${PALEBLUE};
  }

  ul {
    height: 20vh;
    list-style: none;
    column-count: 3;
    font-style: italic;
  }
`;

const StyledWaves = styled.div`
  @keyframes toright {
    0% {
      background-position-x: 0;
    }
    50% {
      background-position-x: 100rem;
    }
    100% {
      background-position-x: 0;
    }
  }

  @keyframes toleft {
    0% {
      background-position-x: 0;
    }
    50% {
      background-position-x: -100rem;
    }
    100% {
      background-position-x: 0;
    }
  }

  height: 18rem;
  position: relative;

  .wave1 {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: url("/wave1.svg");
    height: 20rem;
    opacity: 0.8;
    z-index: 1000;
    animation-delay: 0s;
    animation: toleft 60s linear infinite;
  }

  .wave2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: url("/wave2.svg");
    height: 20rem;
    opacity: 0.8;
    animation-delay: 0s;
    animation: toright 60s linear infinite;
  }
`;

function Waves() {
  return (
    <StyledWaves>
      <div className="wave1" />
      <div className="wave2" />
    </StyledWaves>
  );
}

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
  }, [allNames]);

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
      <Waves />
    </StyledBody>
  );
}
