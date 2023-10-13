import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Suggestions from '../app/components/Suggessions';

describe('Suggestions', () => {
  const mockHandleClick = jest.fn();
  const mockSuggestions = ['apple', 'banana', 'cherry'];
  const mockSearchTerm = 'apple';

  afterEach(() => {
    jest.clearAllMocks();
  });

  // it('renders suggestions correctly', () => {
  //   const {getByText} = render(
  //     <Suggestions
  //       suggessions={mockSuggestions}
  //       searchTerm={mockSearchTerm}
  //       handleClick={mockHandleClick}
  //     />,
  //   );

  //   // Checking if suggestions are displayed correctly
  //   mockSuggestions.forEach(suggestion => {
  //     expect(getByText(suggestion)).toBeTruthy();
  //   });
  // });

  it('handles suggestion click', () => {
    const {getByText} = render(
      <Suggestions
        suggessions={mockSuggestions}
        searchTerm={mockSearchTerm}
        handleClick={mockHandleClick}
      />,
    );

    const bananaSuggestion = getByText('banana');
    fireEvent.press(bananaSuggestion);

    expect(mockHandleClick).toHaveBeenCalledWith('banana');
  });
});
