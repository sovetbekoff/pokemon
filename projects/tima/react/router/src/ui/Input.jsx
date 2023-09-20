import React from "react";

const Input2 = ({ id, label, placeholder, val, onChange, type }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <input
        className="border-2 border-gray-700 rounded-lg p-2 w-full"
        type={type}
        value={val}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input2;
