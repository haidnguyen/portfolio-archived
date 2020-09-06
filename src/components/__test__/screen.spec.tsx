import React from 'react';
import { render } from '@testing-library/react';
import { Screen } from 'components/screen';

describe('Screen', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Screen></Screen>);

    expect(asFragment()).toMatchSnapshot();
  });
});
