// This is a file that contains the shared types and interfaces for the component.

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