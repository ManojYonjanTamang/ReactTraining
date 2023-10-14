import React, { useState } from "react";
import { Data } from "./Data";

function SculptureList() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNext = () => {
    if (index < Data.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
  };
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let curr = Data[index];
  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <div>
        <li>{curr.name}</li>
        <li>{curr.artist}</li>
        <img src={curr.url} alt={curr.name} />
      </div>

      <div>
        <button onClick={() => handleShowMore()}>Detail</button>
        {showMore && <p>{curr.description}</p>}
      </div>
    </div>
  );
}

export default SculptureList;
