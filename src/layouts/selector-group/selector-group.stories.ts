import type { Meta, StoryObj } from '@storybook/react';
import SelectorGroup from './selector-group';
import 'tailwindcss/tailwind.css';

const meta = {
    title: 'Layouts/SelectorGroup',
    component: SelectorGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fromSelectArray: { control: 'object' },
        toSelectArray: { control: 'object' },
        fromSelectValue: { control: 'text' },
        toSelectValue: { control: 'text' },
        handleFromSelectChange: { action: 'changed' },
        handleToSelectChange: { action: 'changed' },
        className: { control: 'text' },
    },
} as Meta<typeof SelectorGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        fromSelectArray: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: false },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        toSelectArray: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: false },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        fromSelectValue: '',
        toSelectValue: '',
        handleFromSelectChange: () => {},
        handleToSelectChange: () => {},
    },
};

export const WithValues: Story = {
    args: {
        fromSelectArray: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: false },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        toSelectArray: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: false },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        fromSelectValue: 'option2',
        toSelectValue: 'option3',
        handleFromSelectChange: () => {},
        handleToSelectChange: () => {},
    },
};

export const WithDisabledOptions: Story = {
    args: {
        fromSelectArray: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: true },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        toSelectArray: [
            { value: 'option1', label: 'Option 1', disabled: false },
            { value: 'option2', label: 'Option 2', disabled: true },
            { value: 'option3', label: 'Option 3', disabled: false },
        ],
        fromSelectValue: '',
        toSelectValue: '',
        handleFromSelectChange: () => {},
        handleToSelectChange: () => {},
    },
};