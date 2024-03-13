import React from 'react';
import { render } from '@testing-library/react';
import SelectorGroup from './selector-group';
import { Option } from '../../components/select/select';

describe('SelectorGroup', () => {
    const fromSelectArray: Option[] = [
        { value: 'Option 1', label: 'Option 1', disabled: false },
        { value: 'Option 2', label: 'Option 2', disabled: true },
        { value: 'Option 3', label: 'Option 3', disabled: false },
    ];
    const toSelectArray: Option[] = [
        { value: 'Option A', label: 'Option A', disabled: false },
        { value: 'Option B', label: 'Option B', disabled: true },
        { value: 'Option C', label: 'Option C', disabled: false },
    ];
    const fromSelectValue = 'Option 1';
    const toSelectValue = 'Option A';
    const handleFromSelectChange = vi.fn();
    const handleToSelectChange = vi.fn();
    const className = 'test-class';

    it('renders SelectorGroup component correctly', () => {
        const { container } = render(
            <SelectorGroup
                fromSelectArray={fromSelectArray}
                toSelectArray={toSelectArray}
                fromSelectValue={fromSelectValue}
                toSelectValue={toSelectValue}
                handleFromSelectChange={handleFromSelectChange}
                handleToSelectChange={handleToSelectChange}
                className={className}
            />
        );

        expect(container.querySelector('.test-class')).toBeInTheDocument();

        fromSelectArray.forEach((option) => {
            expect(container.querySelector(`[value="${option.value}"]`)).toBeInTheDocument();
        });

        toSelectArray.forEach((option) => {
            expect(container.querySelector(`[value="${option.value}"]`)).toBeInTheDocument();
        });
    });
});