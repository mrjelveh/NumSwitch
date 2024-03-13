import type { Meta, StoryObj } from '@storybook/react';
import Input from './input.component';
import 'tailwindcss/tailwind.css';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'text' },
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

export const DifferentType: Story = {
    args: {
        value: '',
        type: 'number'
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