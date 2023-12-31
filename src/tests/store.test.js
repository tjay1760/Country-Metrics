import store from '../redux/store';
import fetchCountries from '../redux/countries/fetchCountries';

describe('test the store', () => {
  it('check if the store initial State is empty', () => {
    const initialState = store.getState().countries;
    expect(initialState).toEqual({ countries: [], error: null, isLoading: false });
  });

  it('check if the store initial State is fill with data after dispatch', async () => {
    await store.dispatch(fetchCountries());
    const currentState = store.getState().countries;
    expect(currentState.countries.length).toBeGreaterThan(5);
  });
});
