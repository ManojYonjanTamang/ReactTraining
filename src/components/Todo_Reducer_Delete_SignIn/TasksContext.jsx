import { createContext, useReducer } from "react";

export const TasksContext = createContext();
export const TasksDispatchContext = createContext();

const initialData = {
  tasks: [
    { id: 0, text: "Philosopher’s Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false },
  ],
  deletedTasks: [],
  signedIn: false,
};

export function TasksProvider({ children }) {
  const [datas, dispatch] = useReducer(tasksReducerFunction, initialData);

  return (
    <TasksContext.Provider value={datas}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducerFunction(datas, action) {
  switch (action.type) {
    case "added": {
      return {
        ...datas,
        tasks: [
          ...datas.tasks,
          { id: action.id, text: action.text, done: false },
        ],
      };
    }
    case "changed": {
      return {
        ...datas,
        tasks: datas.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        }),
      };
    }
    case "deleted": {
      return {
        ...datas,
        tasks: datas.tasks.filter((t) => t.id !== action.id),
        deletedTasks: [
          ...datas.deletedTasks,
          datas.tasks.find((task) => task.id === action.id),
        ],
      };
    }
    case "sign": {
      return { ...datas, signedIn: !datas.signedIn };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
