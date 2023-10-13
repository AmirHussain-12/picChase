import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListImages from '../app/components/ListImages';

describe('ListImages', () => {
  const mockSetVisible: jest.Mock = jest.fn();
  const mockSetItem: jest.Mock = jest.fn();

  const mockImages = [
    {
      id: '1',
      views: 100,
      largeImageURL: 'https://example.com/image1.jpg',
    },
    {
      id: '2',
      views: 200,
      largeImageURL: 'https://example.com/image2.jpg',
    },
  ];

  afterEach(() => {
    mockSetVisible.mockClear();
    mockSetItem.mockClear();
  });

  it('renders images when provided', () => {
    const {getByText} = render(
      <ListImages
        images={mockImages}
        setVisible={mockSetVisible}
        setItem={mockSetItem}
      />,
    );

    expect(getByText('100')).toBeTruthy();
    expect(getByText('200')).toBeTruthy();
  });

  it('renders "No Result Found" when no images are provided', () => {
    const {getByText} = render(
      <ListImages
        images={[]}
        setVisible={mockSetVisible}
        setItem={mockSetItem}
      />,
    );

    expect(getByText('No Result Found')).toBeTruthy();
  });

  it('triggers setVisible and setItem on image click', () => {
    const {getByText} = render(
      <ListImages
        images={mockImages}
        setVisible={mockSetVisible}
        setItem={mockSetItem}
      />,
    );

    fireEvent.press(getByText('100'));

    expect(mockSetVisible).toHaveBeenCalledWith(true);
    expect(mockSetItem).toHaveBeenCalledWith(mockImages[0]);
  });
});
