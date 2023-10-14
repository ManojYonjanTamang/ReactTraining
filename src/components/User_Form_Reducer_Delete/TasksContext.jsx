import { createContext, useReducer, useState } from "react";

export const TasksContext = createContext();
export const TasksDispatchContext = createContext();
export const InputFieldContext = createContext();
export const ErrorContext = createContext();

const initialData = {
  tasks: [
    {
      id: 0,
      name: "Ram",
      email: "abc@gmail.com",
      password: "abc",
      role: "Admin",
      done: true,
    },
    {
      id: 1,
      name: "Shyam",
      email: "def@gmail.com",
      password: "def",
      role: "User",
      done: false,
    },
    {
      id: 2,
      name: "Sita",
      email: "ghigmail.com",
      password: "ghi",
      role: "Admin",
      done: false,
    },
  ],
  deletedTasks: [],
  signedIn: false,
};

function tasksReducerFunction(datas, action) {
  switch (action.type) {
    case "added": {
      return {
        ...datas,
        tasks: [
          ...datas.tasks,
          {
            id: action.id,
            name: action.name,
            email: action.email,
            password: action.password,
            role: action.role,
            done: false,
          },
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

    case "edited": {
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

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function TasksProvider({ children }) {
  const [datas, dispatch] = useReducer(tasksReducerFunction, initialData);
  let initialAddState = { name: "", email: "", password: "", role: "" };
  const [userToAdd, setUserToAdd] = useState(initialAddState);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState({});

  return (
    <TasksContext.Provider value={datas}>
      <TasksDispatchContext.Provider value={dispatch}>
        <InputFieldContext.Provider
          value={{
            userToAdd,
            setUserToAdd,
            isEditing,
            setIsEditing,
            initialAddState,
          }}
        >
          <ErrorContext.Provider value={[error, setError]}>
            {children}
          </ErrorContext.Provider>
        </InputFieldContext.Provider>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
