import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./TasksProvider";

const TaskLists = () => {
  const tasks = useContext(TasksContext);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskLists;
