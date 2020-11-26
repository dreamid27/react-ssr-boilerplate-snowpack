import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './index';

describe('./About', () => {
  it('should render component correctly', () => {
    const { getByText } = render(
      <About />,
    );

    expect(getByText(/Halaman About/)).toBeInTheDocument();
  });
});
