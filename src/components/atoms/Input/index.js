import React from "react";
import "./input.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input type="text" className="input" {...rest} />
    </div>
  );
};

export default Input;
