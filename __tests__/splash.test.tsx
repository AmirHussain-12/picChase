import React from 'react';
import {render, act} from '@testing-library/react-native';
import SplashScreen from '../app/screens/SplashScreen';
import {useNavigation} from '@react-navigation/native';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('SplashScreen', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the LogoIcon', () => {
    const {getByTestId} = render(<SplashScreen />);
    // Assuming you have a testID="logo-icon" on the LogoIcon component
    expect(getByTestId('logo-icon')).toBeTruthy();
  });

  it('navigates to Home screen after 2 seconds', async () => {
    render(<SplashScreen />);

    // Wait for the timeout to complete using Jest's act function
    await act(async () => new Promise(resolve => setTimeout(resolve, 2100))); // waiting slightly more than 2 seconds

    expect(mockReplace).toHaveBeenCalledWith('Home');
  });
});
