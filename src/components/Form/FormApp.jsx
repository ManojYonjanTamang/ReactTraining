import React, { useState } from "react";
import FormInput from "./FormInput";

const FormApp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    address: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 1,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
    },
  ];

  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div>
      <form onSubmit={handleForm}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormApp;
