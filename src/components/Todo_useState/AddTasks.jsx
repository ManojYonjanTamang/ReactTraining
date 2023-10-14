import React, { useState } from "react";

const AddTasks = ({ tasks, handleAddItems }) => {
  const [text, setText] = useState("");
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
          handleAddItems(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTasks;
