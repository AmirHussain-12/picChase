import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import HomeScreen from '../app/screens/HomeScreen';

jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.Alert.alert = jest.fn();
  return rn;
});

jest.mock('../app/services/spellChecker', () => ({
  spellChecker: jest.fn(),
}));

jest.mock('../app/services/getImage', () => ({
  getImages: jest.fn(),
}));

jest.mock('../app/assets/homeIcon', () => 'HomeIcon');
jest.mock('../app/assets/searchIcon', () => 'SearchIcon');

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    const {getByPlaceholderText, getByTestId} = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByPlaceholderText('Search for images...')).toBeTruthy();
      expect(getByTestId('search-button')).toBeTruthy();
    });
  });

  it('shows error on empty search', async () => {
    const {getByTestId, getByText} = render(<HomeScreen />);
    await waitFor(() => {
      fireEvent.press(getByTestId('search-button'));
      expect(getByText('Please fill required field')).toBeTruthy();
    });
  });

  it('updates search input correctly', async () => {
    const {getByPlaceholderText} = render(<HomeScreen />);
    fireEvent.changeText(
      getByPlaceholderText('Search for images...'),
      'elephant',
    );
    await waitFor(() => {
      expect(getByPlaceholderText('Search for images...').props.value).toBe(
        'elephant',
      );
    });
  });
});
