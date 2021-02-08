import axios from "axios";

const baseURL = "https://secret-oasis-30636.herokuapp.com/argonautes";

const base = axios.create({
  baseURL,
});

export const getAllNames = () => base.get("/");

export const postName = (name) =>
  base.post("/", { name: name }).then(console.log("C POSTÉ"));
