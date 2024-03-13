// This is a file that contains the shared types and interfaces for the component.

export interface ButtonProps {
    secondary?: boolean;
    size?: 'small' | 'default' | 'large';
    label: string;
    disabled?: boolean;
    onClick?: () => void;
  }
  