import React from 'react';
import { ButtonProps } from './button.shared';
import './button.styles.scss';


export const Button = ({
  secondary = false,
  size = 'default',
  label,
  disabled,
  ...props
}: ButtonProps) => {
  const mode = secondary ? 'ns-button--secondary' : 'ns-button--primary';
  return (
    <button
      type="button"
      className={['ns-button', `ns-button--${size}`, mode].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
