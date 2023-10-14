import React from "react";

const FormInput = (props) => {
  const { label, id, handleChange, ...rest } = props;
  console.log(label);
  return (
    <div>
      <label>{label}</label>
      <input {...rest} onChange={handleChange} />
    </div>
  );
};

export default FormInput;
