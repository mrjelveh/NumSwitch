import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

test('renders button with label', () => {
    const label = 'Click me';
    const { getByText } = render(<Button label={label} />);
    const buttonElement = getByText(label);
    expect(buttonElement).toBeInTheDocument();
});