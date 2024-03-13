import type { Meta, StoryObj } from '@storybook/react';
import Converter from './converter.layout';
import 'tailwindcss/tailwind.css';

const meta = {
    title: 'Layouts/Converter',
    component: Converter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta<typeof Converter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};