import React, { useReducer } from "react";
import AddTasks from "./AddTasks";
import TaskLists from "./TaskLists";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add_items": {
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

const TodoReducer = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddItems(textToAdd) {
    // setTasks([{ id: nextId++, text: textToAdd, done: false }, ...tasks]);
    dispatch({ type: "add_items", id: nextId++, text: textToAdd });
  }

  function handleDeleteItem(deleteId) {
    // setTasks(tasks.filter((task) => task.id !== deleteId));
    dispatch({
      type: "delete",
      id: deleteId,
    });
  }

  function handleTaskChange(changedItem) {
    // setTasks(
    //   tasks.map((task) => {
    //     if (task.id === changedItem.id) {
    //       return changedItem;
    //     }
    //     return task;
    //   })
    // );
    dispatch({ type: "change", item: changedItem });
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
    </div>
  );
};

export default TodoReducer;
