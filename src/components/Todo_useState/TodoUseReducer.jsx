import React, { useState } from "react";
import AddTasks from "./AddTasks";
import TaskLists from "./TaskLists";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
let deleted = [];

const TodoUseState = () => {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddItems(textToAdd) {
    setTasks([{ id: nextId++, text: textToAdd, done: false }, ...tasks]);
  }

  function handleDeleteItem(deleteId) {
    let foundTask = tasks.find((task) => task.id === deleteId);
    deleted.push(foundTask);
    setTasks(tasks.filter((task) => task.id !== deleteId));
  }

  function handleTaskChange(changedItem) {
    setTasks(
      tasks.map((task) => {
        if (task.id === changedItem.id) {
          return changedItem;
        }
        return task;
      })
    );
  }

  return (
    <div>
      <h1>Prague Itinerary</h1>
      <AddTasks tasks={tasks} handleAddItems={handleAddItems} />
      <TaskLists
        tasks={tasks}
        handleDeleteItem={handleDeleteItem}
        handleTaskChange={handleTaskChange}
      />
      <ul>
        {deleted.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUseState;
