import React from "react";

const SearchArea = ({ filterText, setFilterText, marking, setMarking }) => {
  const getCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMarking([...marking, value]);
    } else {
      setMarking(marking.filter((prevValue) => prevValue !== value));
    }
  };
  console.log(marking);

  return (
    <>
      Search{" "}
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <br />
      <input type="checkbox" value="admin" onChange={(e) => getCheck(e)} />
      Admin <input type="checkbox" value="user" onChange={(e) => getCheck(e)} />
      User
      <input
        type="checkbox"
        value="client"
        onChange={(e) => getCheck(e)}
      />{" "}
      Client{" "}
    </>
  );
};

export default SearchArea;
