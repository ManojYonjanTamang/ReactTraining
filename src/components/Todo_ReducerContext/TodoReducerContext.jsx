import React, { useReducer } from "react";
import AddTasks from "./AddTasks";
import TaskLists from "./TaskLists";
import TasksProvider from "./TasksProvider";

const TodoReducerContext = () => {
  return (
    <TasksProvider>
      <h1>Prague Itinerary</h1>
      <AddTasks />
      <TaskLists />
    </TasksProvider>
  );
};

export default TodoReducerContext;
