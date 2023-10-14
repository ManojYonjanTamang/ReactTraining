import React, { useState } from "react";

const InputSearch = ({
  todos,
  setFilteredTodos,
  text,
  setText,
  filteredTodos,
}) => {
  function handleInputChange(e) {
    setText(e.target.value);
    setFilteredTodos(
      todos.filter((todo) => todo.title.includes(text.toLowerCase()))
    );
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
};

export default InputSearch;
