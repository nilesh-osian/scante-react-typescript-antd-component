// src/components/Button/Button.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import Button from './index';

test('Button renders with correct text', () => {
  const { getByText } = render(<Button>Test Button</Button>);
  expect(getByText('Test Button')).toBeInTheDocument();
});

test('Button handles onClick event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
