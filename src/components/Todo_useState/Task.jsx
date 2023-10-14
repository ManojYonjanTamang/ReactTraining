import React, { useState } from "react";

const Task = ({ task, handleDeleteItem, handleTaskChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => handleTaskChange({ ...task, text: e.target.value })}
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
        onChange={(e) => handleTaskChange({ ...task, done: e.target.checked })}
      />
      {taskContent}

      <button onClick={() => handleDeleteItem(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
