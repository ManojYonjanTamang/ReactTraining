import React, { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddItem(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
