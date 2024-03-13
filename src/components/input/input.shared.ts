
// This is a file that contains the shared types and interfaces for the component.

export interface InputProps {
    value: string;
    onChange: (value: string) => void;
    type?: string;
    className?: string;
    fullWidth?: boolean;
}