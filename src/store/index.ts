import createStore, { Module, StoreonEvents } from "storeon";
import film from "./film";

export const store = createStore([
  film,
  process.env.NODE_ENV !== "production" && require("storeon/devtools"),
]);
