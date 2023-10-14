import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        Stock Products Only
      </label>
    </form>
  );
};

export default SearchBar;
