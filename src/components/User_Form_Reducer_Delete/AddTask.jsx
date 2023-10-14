import { useState, useContext } from "react";
import {
  TasksDispatchContext,
  InputFieldContext,
  ErrorContext,
} from "./TasksContext.jsx";

export default function AddTask() {
  const dispatch = useContext(TasksDispatchContext);
  const { userToAdd, setUserToAdd, isEditing, setIsEditing, initialAddState } =
    useContext(InputFieldContext);
  const [error, setError] = useContext(ErrorContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserToAdd((prevuserToAdd) => ({ ...prevuserToAdd, [name]: value }));
  }

  const handleSubmitAdd = (e) => {
    if (validateInput()) {
      e.preventDefault();
      setUserToAdd(initialAddState);
      dispatch({
        type: "added",
        id: nextId++,
        name: userToAdd.name,
        email: userToAdd.email,
        password: userToAdd.password,
        role: userToAdd.role,
      });
    }
  };

  const handleSubmitSaveEdit = (e) => {
    if (validateInput()) {
      e.preventDefault();
      setUserToAdd(initialAddState);
      setIsEditing(false);
      dispatch({
        type: "edited",
        task: userToAdd,
      });
    }
  };

  let btnAtInputArea;
  if (isEditing) {
    btnAtInputArea = (
      <button type="button" onClick={handleSubmitSaveEdit}>
        Save
      </button>
    );
  } else {
    btnAtInputArea = (
      <button type="button" onClick={handleSubmitAdd}>
        Add
      </button>
    );
  }

  function validateInput() {
    let err = {};
    if (userToAdd.name === "") {
      err.name = "Name shouldn't be empty.";
    }
    if (userToAdd.email === "") {
      err.email = "Email shouldn't be empty.";
    }
    if (userToAdd.password === "") {
      err.password = "Password shouldn't be empty.";
    }
    if (userToAdd.role === "") {
      err.role = "Please select role.";
    }
    setError({ ...err });
    return Object.keys(err).length < 1;
  }

  return (
    <form>
      <div>
        <label htmlFor="name">User Name</label>

        <input
          style={{ margin: " 5px" }}
          name="name"
          type="text"
          placeholder="Username"
          value={userToAdd.name}
          onChange={handleInputChange}
          pattern="^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$"
          title="Alphabets Only"
        />
        <span>{error.name}</span>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          style={{ margin: " 5px" }}
          name="email"
          type="email"
          placeholder="Email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          value={userToAdd.email}
          onChange={handleInputChange}
        />
        <span>{error.email}</span>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          style={{ margin: " 5px" }}
          name="password"
          type="password"
          placeholder="Password"
          value={userToAdd.password}
          onChange={handleInputChange}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
        <span>{error.password}</span>
      </div>

      <div>
        <label htmlFor="role">Role</label>

        <select
          style={{ margin: " 5px" }}
          name="role"
          value={userToAdd.role}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <span>{error.role}</span>
      </div>

      <div>{btnAtInputArea}</div>
    </form>
  );
}

let nextId = 3;
