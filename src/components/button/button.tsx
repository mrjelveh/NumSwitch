import React from 'react';
import './button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  secondary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'default' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  secondary = false,
  size = 'default',
  label,
  ...props
}: ButtonProps) => {
  const mode = secondary ? 'ns-button--secondary' : 'ns-button--primary';
  return (
    <button
      type="button"
      className={['ns-button', `ns-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
