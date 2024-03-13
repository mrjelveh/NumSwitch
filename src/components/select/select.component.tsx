import React, { ChangeEvent } from "react";
import { SelectProps } from "./select.shared";
import "./select.styles.scss";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="ns-select">
      <select
        className={`ns-select__select ${className}`}
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled defaultValue="">
          Select an option
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
