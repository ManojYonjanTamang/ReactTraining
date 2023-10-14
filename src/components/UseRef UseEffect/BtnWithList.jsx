import React, { forwardRef } from "react";

const BtnWithList = forwardRef((props, itemRef) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const filteredTodos = props.filteredTodos;
  const setFilteredTodos = props.setFilteredTodos;
  const setText = props.setText;

  function getMap() {
    if (!itemRef.current) {
      itemRef.current = new Map();
    }
    return itemRef.current;
  }

  function handleClickScrollTo(jumpToId) {
    const map = getMap();
    const getItem = map.get(jumpToId);
    getItem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleDelete(deleteId) {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
    setFilteredTodos(todos.filter((todo) => todo.id !== deleteId));
    setText("");
  }

  console.log(itemRef.current);

  return (
    <>
      <span>
        <button onClick={() => handleClickScrollTo(50)}>Jump to Quarter</button>
        <button onClick={() => handleClickScrollTo(100)}>Jump to Middle</button>
        <button onClick={() => handleClickScrollTo(200)}>Jump to End</button>
      </span>
      <ol>
        {filteredTodos.map((todo) => (
          <>
            <li
              key={todo.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(todo.id, node);
                } else {
                  map.delete(todo.id);
                }
              }}
            >
              {todo.title}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          </>
        ))}
      </ol>
    </>
  );
});

export default BtnWithList;
