import React, { useState } from "react";

const SearchArea = ({ filterText, setFilterText, marking, setMarking }) => {
  const handleCheckboxChange = (e) => {
    setMarking((prevSelected) => {
      if (prevSelected === e.target.value) {
        return [];
      } else {
        return e.target.value;
      }
    });
  };

  return (
    <>
      Search{" "}
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          value="admin"
          checked={marking === "admin"}
          onChange={handleCheckboxChange}
        />
        Admin
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="user"
          checked={marking === "user"}
          onChange={handleCheckboxChange}
        />
        User
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="client"
          checked={marking === "client"}
          onChange={handleCheckboxChange}
        />
        Client
      </label>{" "}
    </>
  );
};

export default SearchArea;
