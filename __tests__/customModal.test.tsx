import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomModal from '../app/components/CustomModal';

describe('CustomModal', () => {
  const mockCloseModal = jest.fn();

  const mockItem = {
    largeImageURL: 'https://example.com/image.jpg',
    likes: 100,
    comments: 50,
    views: 1000,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders modal when visible is true', () => {
    const {getByText, getByTestId} = render(
      <CustomModal
        visible={true}
        closeModal={mockCloseModal}
        item={mockItem}
      />,
    );

    expect(getByText('100')).toBeTruthy();
    expect(getByText('50')).toBeTruthy();
    expect(getByText('views 1000')).toBeTruthy();
  });

  it('does not render modal when visible is false', () => {
    const {queryByText} = render(
      <CustomModal
        visible={false}
        closeModal={mockCloseModal}
        item={mockItem}
      />,
    );

    expect(queryByText('100')).toBeNull();
    expect(queryByText('50')).toBeNull();
    expect(queryByText('views 1000')).toBeNull();
  });

  it('calls closeModal when cross icon or outer modal area is pressed', () => {
    const {getByTestId} = render(
      <CustomModal
        visible={true}
        closeModal={mockCloseModal}
        item={mockItem}
      />,
    );

    const closeButton = getByTestId('close-button'); // Assuming you add testID="close-button" to the TouchableOpacity with CrossIcon
    fireEvent.press(closeButton);
    expect(mockCloseModal).toHaveBeenCalled();

    const outerModalArea = getByTestId('outer-modal-area'); // Assuming you add testID="outer-modal-area" to the outer TouchableOpacity
    fireEvent.press(outerModalArea);
    expect(mockCloseModal).toHaveBeenCalledTimes(2);
  });
});
