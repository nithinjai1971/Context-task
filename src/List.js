import React, { useContext } from "react";

import { myContext } from "./App";
export default function Form() {
  const { items } = useContext(myContext);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
