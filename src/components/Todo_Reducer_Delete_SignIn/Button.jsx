import React, { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

export default function Button() {
  const datas = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "sign" })}>
        {datas.signedIn ? "Signout" : "SignIn"}
      </button>
    </div>
  );
}
// onClick={dispatch({ type: "signIn" })}
