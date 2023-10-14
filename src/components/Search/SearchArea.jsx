import React from "react";

const SearchArea = ({
  filterText,
  setFilterText,
  adminOnly,
  setAdminOnly,
  userOnly,
  setUserOnly,
  clientOnly,
  setClientOnly,
}) => {
  return (
    <>
      Search:{" "}
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        name="check"
        value={adminOnly}
        onChange={(e) => setAdminOnly(e.target.checked)}
      />
      Admin only:{" "}
      <input
        type="checkbox"
        name="check"
        value={userOnly}
        onChange={(e) => setUserOnly(e.target.checked)}
      />
      User only:
      <input
        type="checkbox"
        name="check"
        value={clientOnly}
        onChange={(e) => setClientOnly(e.target.checked)}
      />{" "}
      Client only:{" "}
    </>
  );
};

export default SearchArea;
