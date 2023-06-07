import React from 'react';

export const RadioButton = ({ value, checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <label className="mr-2">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
        {label}
      </label>
    </div>
  );
};

