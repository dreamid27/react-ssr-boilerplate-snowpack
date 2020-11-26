import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

describe('./About', () => {
  it('should render component correctly', () => {
    const { getByText } = render(
      <Home />,
    );

    expect(getByText(/Ini Home/)).toBeInTheDocument();
  });
});
