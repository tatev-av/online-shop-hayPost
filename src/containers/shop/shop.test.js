import React from 'react';
import { render } from '@testing-library/react';
import Shop from './index'

test('The shop page have title', () => {
  const { getByText } = render(<Shop />);
  const heading = getByText(/Shop/i);
  expect(heading).toBeInTheDocument();
});
