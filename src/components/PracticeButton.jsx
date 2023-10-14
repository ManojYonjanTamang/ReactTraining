import React, { useState } from "react";

const PracticeButton = ({ passOnClick, count }) => {
  return (
    <div>
      <button onClick={passOnClick}>Clicked {count} times</button>
    </div>
  );
};

export default PracticeButton;
