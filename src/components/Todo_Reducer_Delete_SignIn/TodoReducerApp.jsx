import AddTask from "./AddTask.jsx";
import Button from "./Button.jsx";
import TaskList from "./TaskList.jsx";
import { TasksProvider } from "./TasksContext.jsx";

export default function TodoReducerApp() {
  return (
    <TasksProvider>
      <Button />
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
