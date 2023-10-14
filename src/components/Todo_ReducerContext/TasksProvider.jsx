import React, { createContext, useReducer } from "react";
import { useContext } from "react";
export const TasksContext = createContext();
export const DispatchContext = createContext();

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [{ id: action.id, text: action.text, done: false }, ...tasks];
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "change": {
      return tasks.map((task) => {
        if (task.id === action.item.id) {
          return action.item;
        } else {
          return task;
        }
      });
    }
  }
}

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;

export function useTasks() {
  return useContext(TasksContext);
}

export function useDispatch() {
  return useContext(DispatchContext);
}
