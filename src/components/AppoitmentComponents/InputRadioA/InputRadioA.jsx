import React from "react";

function InputRadioA({ id, value, label, name }) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        defaultChecked={
          id === "exercise" || id === "peresent" || id === "female"
        }
      />
    </label>
  );
}

export default InputRadioA;
