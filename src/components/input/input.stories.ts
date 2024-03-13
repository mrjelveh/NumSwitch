import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';
import 'tailwindcss/tailwind.css';

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        fullWidth: { control: 'boolean' },
        onChange: { action: 'changed' },
        className: { control: 'text' },
    },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: '',
    },
};

export const FullWidth: Story = {
    args: {
        value: '',
        fullWidth: true
    },
};

export const WithValue: Story = {
    args: {
        value: 'Hello World',
    },
};