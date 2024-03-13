import type { Meta, StoryObj } from '@storybook/react';
import Select from './select';
import 'tailwindcss/tailwind.css';

const meta = {
    title: 'Example/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        options: { control: 'object' },
        value: { control: 'text' },
        onChange: { action: 'changed' },
        className: { control: 'text' },
    },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: false },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        value: '',
    },
};

export const WithValue: Story = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: false },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        value: 'option2',
    },
};

export const WithDisabledOption: Story = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: true },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        value: '',
    },
};