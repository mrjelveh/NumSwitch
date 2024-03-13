import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Converter from './converter.layout';

describe('Converter', () => {
  it('renders Converter component correctly', () => {
    const { container } = render(<Converter />);
    expect(container).toBeInTheDocument();
  });
});