import { useState } from "react";

function Button({ onClick, children }) {
  const [text, setText] = useState("Movie");
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(text);
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={(txt) => alert(`Playing!${txt}`)}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
