import React, { useEffect, useRef, useState } from "react";
import BtnWithList from "./BtnWithList";
import InputSearch from "./InputSearch";

const UseRefEffect = () => {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const itemRef = useRef();

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const dataFromAPI = await res.json();
      setTodos(dataFromAPI);
      setFilteredTodos(dataFromAPI);
    };
    getTodos();
  }, []);

  return (
    <>
      <InputSearch
        todos={todos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos}
        text={text}
        setText={setText}
      />
      <BtnWithList
        todos={todos}
        setTodos={setTodos}
        ref={itemRef}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        setText={setText}
      />
    </>
  );
};

export default UseRefEffect;
