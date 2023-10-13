import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Search from '../app/components/Search';

describe('Search', () => {
  const mockSetSearchTerm: jest.Mock = jest.fn();
  const mockHandleSpellChecker: jest.Mock = jest.fn();
  const mockSetLoader: jest.Mock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <Search
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
        handleSpellChecker={mockHandleSpellChecker}
        setLoader={mockSetLoader}
      />,
    );

    expect(getByPlaceholderText('Search for images...')).toBeTruthy();
  });

  it('displays error when search term is empty', () => {
    const {getByText, getByTestId} = render(
      <Search
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
        handleSpellChecker={mockHandleSpellChecker}
        setLoader={mockSetLoader}
      />,
    );

    const searchButton = getByTestId('search-button');
    fireEvent.press(searchButton);

    expect(getByText('Please fill required field')).toBeTruthy();
    expect(mockSetLoader).not.toHaveBeenCalled();
    expect(mockHandleSpellChecker).not.toHaveBeenCalled();
  });

  it('handles search when term is provided', async () => {
    const {getByPlaceholderText, getByTestId} = render(
      <Search
        searchTerm="sample"
        setSearchTerm={mockSetSearchTerm}
        handleSpellChecker={mockHandleSpellChecker}
        setLoader={mockSetLoader}
      />,
    );

    const input = getByPlaceholderText('Search for images...');
    fireEvent.changeText(input, 'sample');

    const searchButton = getByTestId('search-button');
    fireEvent.press(searchButton);

    expect(mockSetLoader).toHaveBeenCalledWith(true);
    expect(mockHandleSpellChecker).toHaveBeenCalled();
  });
});
