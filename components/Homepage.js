import { useEffect, useState } from "react";
import { getAllNames, postName } from "../data/services";

export default function Homepage() {
  const [allNames, setAllNames] = useState([]);

  function fetchNames() {
    getAllNames().then((res) => {
      setAllNames(res.data);
    });
  }

  useEffect(() => {
    console.log("toto");
    fetchNames();
  }, []);

  return (
    <div>
      <header>
        <h1>La grande liste des argonautes !</h1>
        <div>
          <form>
            <label>Ajouter un argonaute</label>
            <input type="text" placeholder="Roger..." />
            <button type="submit">OK</button>
          </form>
        </div>
      </header>
      <main>
        <div>
          {allNames.map((argonaute) => (
            <p>{argonaute.name}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
