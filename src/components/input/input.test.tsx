import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './input.component';

describe('Input', () => {
    test('renders without crashing', () => {
        render(<Input value="" onChange={() => {}} />);
    });

    test('renders with correct value', () => {
        const value = 'Test Value';
        const { getByDisplayValue } = render(<Input value={value} onChange={() => {}} />);
        const inputElement = getByDisplayValue(value);
        expect(inputElement).toBeInTheDocument();
    });

    test('calls onChange callback when input value changes', () => {
        let inputValue = '';
        const onChangeMock = (value: string) => {
            inputValue = value;
        };
        const { getByRole } = render(<Input value={inputValue} onChange={onChangeMock} />);
        const inputElement = getByRole('textbox');
        const testValue = 'Test Value';
        fireEvent.change(inputElement, { target: { value: testValue } });
        expect(inputValue).toBe(testValue);
    });

    test('applies className prop correctly', () => {
        const className = 'custom-class';
        const { container } = render(<Input value="" onChange={() => {}} className={className} />);
        const inputElement = container.querySelector('input');
        expect(inputElement).toHaveClass(className);
    });

    test('applies fullWidth prop correctly', () => {
        const { container } = render(<Input value="" onChange={() => {}} fullWidth />);
        const inputElement = container.querySelector('input');
        expect(inputElement).toHaveClass('ns-input--full-width');
    });
});
