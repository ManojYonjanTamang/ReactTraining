import React, { useContext, useState } from "react";
import { DispatchContext } from "./TasksProvider";

const AddTasks = () => {
  const [text, setText] = useState("");

  const dispatch = useContext(DispatchContext);
  let nextId = 3;

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Add task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({ type: "add", text: text, id: nextId++ });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTasks;
