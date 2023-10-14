import React, { useContext, useState } from "react";
import { DispatchContext, useDispatch } from "./TasksProvider";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  // const dispatch = useContext(DispatchContext);
  const dispatch = useDispatch();

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "change",
              item: { ...task, text: e.target.value },
            })
          }
        />
        <button onClick={(e) => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={(e) => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "change",
            item: { ...task, done: e.target.checked },
          });
        }}
      />
      {taskContent}

      <button
        onClick={() => {
          dispatch({ type: "delete", id: task.id });
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
