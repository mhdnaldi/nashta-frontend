import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className='input'>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
