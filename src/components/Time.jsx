import React, { useEffect, useState } from "react";

export default function Time() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }, []);

  function handleClick() {
    const insertAt = 1;
    const nextArtist = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtist);
    setName("");
  }

  return <div>{count}</div>;
}
