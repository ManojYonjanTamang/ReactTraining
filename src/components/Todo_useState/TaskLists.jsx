import React from "react";
import Task from "./Task";

const TaskLists = ({ tasks, handleDeleteItem, handleTaskChange }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDeleteItem={handleDeleteItem}
          handleTaskChange={handleTaskChange}
        />
      ))}
    </div>
  );
};

export default TaskLists;
