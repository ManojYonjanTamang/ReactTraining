import React from "react";
import { useState } from "react";
import TodoItems from "./TodoItems";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { title: "Laundary", selected: false, id: 0 },
    { title: "Dishes", selected: false, id: 1 },
    { title: "Study", selected: false, id: 2 },
    { title: "Exercise", selected: false, id: 3 },
  ]);

  function getSelected(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    setTodos(newTodos);
  }

  function handleClick() {
    setTodos(todos.filter((todo) => todo.selected === false));
  }

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <TodoItems todo={todo} key={todo.id} getSelected={getSelected} />
        ))}
      </ul>
      <button onClick={handleClick}>Delete</button>
    </>
  );
}
