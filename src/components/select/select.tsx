import React, { ChangeEvent } from 'react';
import './select.scss';

export type SelectProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};

export type Option = {
    value: string;
    label: string;
    disabled: boolean;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, className }) => {
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
                <option value="" disabled selected>Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;