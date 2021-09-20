import React, { useReducer, createContext } from "react";
import List from "./List";
import Form from "./Form";
import "./App.css";

export const myContext = createContext();
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default function App() {
  const [items, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ items, dispatch }}>
      <Form />
      <List />
    </myContext.Provider>
  );
}
