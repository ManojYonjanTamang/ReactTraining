import React from "react";
import StateDuplication from "./components/StateDuplication";
import Parent from "./components/NestedComponent/Parent";
import AppPackage from "./components/AddPackageCount/AppPackage";
import UpdateStateInArray from "./components/UpdateStateInArray/UpdatingStateInArray";
import ShoppingCart from "./components/UpdateStArrINC/DEC/ShoppingCart";
import TodoList from "./components/Todo(LiftingStateUp)/TodoList";
import ChatLists from "./components/Chat/ChatApp";
import TodoReducerApp from "./components/Todo_Reducer_Delete_SignIn/TodoReducerApp";
import UseTime from "./components/useTIme";
import TodoUserReducerApp from "./components/User_Form_Reducer_Delete/TodoUserReducerApp";
import UseRefEffect from "./components/UseRef UseEffect/UseRefEffect";

export default function App() {
  return (
    <div>
      {/* <AppPackage /> */}
      {/* <Parent /> */}
      {/* <UpdateStateInArray /> */}
      {/* <ShoppingCart /> */}
      {/* <TodoList /> */}
      {/* <ChatLists /> */}
      {/* <TodoUseReducer /> */}
      {/* <TodoReducer /> */}
      {/* <TodoReducerContext /> */}
      {/* <TodoReducerApp /> */}
      {/* <UseTime /> */}
      <UseRefEffect />
    </div>
  );
}
