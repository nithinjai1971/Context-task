import React, { useContext } from "react";
import { myContext } from "./App";

export default function Form() {
  const { dispatch } = useContext(myContext);
  const [text, setText] = React.useState("");
  const addItem = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_ITEM", payload: text });
    setText("");
  };
  return (
    <form onSubmit={(e) => addItem(e)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input type="submit" value="submit" />
    </form>
  );
}
