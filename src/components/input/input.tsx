import React, { ChangeEvent } from 'react';
import './input.scss';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ value, onChange, fullWidth, className }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input 
        type="text" 
        value={value} 
        onChange={handleInputChange}
        className={['ns-input', fullWidth ? 'ns-input--full-width' : '', className ? className : ''].join(' ').trim()} />
    );
};

export default Input;