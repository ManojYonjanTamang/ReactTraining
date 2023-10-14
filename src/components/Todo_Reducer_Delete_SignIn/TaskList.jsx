import { useState, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext.jsx";

export default function TaskList() {
  const datas = useContext(TasksContext);
  //  datas = { tasks: [ { id: 0, text: "Philosopher’s Path", done: true }, { id: 1, text: "Visit the temple", done: false },
  //                     { id: 2, text: "Drink matcha", done: false }, ],
  //            deletedTasks: [],
  //  };
  const tasks = datas.tasks;
  const deletedTasks = datas.deletedTasks;
  // console.log(tasks);
  // console.log(deletedTasks);

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
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
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
