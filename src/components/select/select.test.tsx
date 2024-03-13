import React from 'react';
import { render } from '@testing-library/react';
import { Option } from './select.shared';
import Select from './select.component';

const options: Option[] = [
    { value: 'option1', label: 'Option 1', disabled: false },
    { value: 'option2', label: 'Option 2', disabled: true },
    { value: 'option3', label: 'Option 3', disabled: false },
];

describe('Select', () => {
    it('renders options correctly', () => {
        const { getByText } = render(<Select options={options} value="option1" onChange={() => {}} />);
        
        options.forEach(option => {
            const optionElement = getByText(option.label);
            expect(optionElement).toBeInTheDocument();
        });
    });

    it('renders the default option', () => {
        const { getByText } = render(<Select options={options} value="" onChange={() => {}} />);
        
        const defaultOption = getByText('Select an option');
        expect(defaultOption).toBeInTheDocument();
    });
});