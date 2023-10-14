import React, { useEffect, useRef, useState } from "react";

const Count = () => {
  const [inputVal, setInputVal] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h1>{count.current}</h1>
    </div>
  );
};

export default Count;
