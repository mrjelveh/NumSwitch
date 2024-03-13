import React, { ChangeEvent } from 'react';
import { InputProps } from './input.shared';
import './input.styles.scss';

const Input: React.FC<InputProps> = ({ type, value, onChange, fullWidth, className }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input 
        type={type ? type : 'text'} 
        value={value} 
        onChange={handleInputChange}
        className={['ns-input', fullWidth ? 'ns-input--full-width' : '', className ? className : ''].join(' ').trim()} />
    );
};

export default Input;