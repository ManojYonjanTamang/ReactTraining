import React, { useState } from "react";

const TodoItems = ({ todo, getSelected }) => {
  return <li onClick={() => getSelected(todo.id)}>{todo.title}</li>;
};

export default TodoItems;
