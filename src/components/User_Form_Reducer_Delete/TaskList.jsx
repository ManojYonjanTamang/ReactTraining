import { useContext } from "react";
import {
  ErrorContext,
  InputFieldContext,
  TasksContext,
  TasksDispatchContext,
} from "./TasksContext.jsx";

export default function TaskList() {
  const datas = useContext(TasksContext);

  const tasks = datas.tasks;
  const deletedTasks = datas.deletedTasks;

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>

      {datas.signedIn && (
        <>
          <h1>Deleted Task</h1>
          <ul>
            {deletedTasks.map((task) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function Task({ task }) {
  const datas = useContext(TasksContext);
  const tasks = datas.tasks;
  const dispatch = useContext(TasksDispatchContext);
  const { userToAdd, setUserToAdd, isEditing, setIsEditing, initialAddState } =
    useContext(InputFieldContext);
  const [error, setError] = useContext(ErrorContext);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <button
          onClick={() => {
            setIsEditing(false);
            setUserToAdd(initialAddState);
            setError({});
          }}
        >
          Edit
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <button
          onClick={() => {
            setIsEditing(true);
            setUserToAdd(tasks.find((t) => t.id === task.id));
            setError({});
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />

      {task.name}
      {taskContent}

      <button
        onClick={() => {
          dispatch({ type: "deleted", id: task.id });
        }}
      >
        Delete
      </button>
    </label>
  );
}
