import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from '../redux/store';
import Country from '../components/Country';

describe('Country component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Country />
        </MemoryRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
