# PicChase

PicChase is a mobile app designed to display images from a search term using a chosen image search API. The app features a custom spell checker to automatically correct user input mistakes, as well as a responsive image gallery for viewing search results.

## Features

- **Image Search:** The app allows users to enter a search term in a text entry field and request image results by tapping a "Search" icon. The application is using Pixabay image search API to fetch images.

- **Custom Spell Checker:** The app includes a custom spell checker that automatically corrects specific user input mistakes, such as:
  - Remove non-letter characters. `nyl;on` should auto-correct to `nylon`.
  - Mistyped vowels. `ceku` should auto-correct to `cake`.

- **Responsive Gallery:** The search results are displayed in a responsive gallery style. Users can scroll through the images to view the results conveniently.

- **Image Overlay:** Tapping on an image in the gallery will display it in a responsive overlay, allowing users to view the image in more detail.

  This feature ensures that users receive relevant image results even if they make spelling errors.

- **Error Handling:** The app includes error handling to provide a smooth user experience. It should gracefully handle network errors, API request failures, and other unexpected issues.

## Assumptions and Decisions

In the development of this app, the following assumptions and decisions have been made:

- **Spell Checker:** A custom spell checker is implemented to correct specific types of user input mistakes, as described in the project requirements. If there would be multiple possible words against a mistyped word, it would show all possibilities as suggestion. This feature enhances the user experience by ensuring that search results are relevant.

- **Algorithm:** Assuming in a spell checker, replacing vowels with vowels is the current algorithm. If the need arises to replace them with English alphabets, a single line in the `spellChecker.ts` must be modified.

Replace `word = word.replace(/[aeiou]/g, '[aeiou]');` with `word = word.replace(/[aeiou]/g, '.');`

## Demo

[App Demo](https://s11.gifyu.com/images/S4xSo.gif)

<img src="./src/assets/images/brokazy.gif?raw=true" width="200px">

## Getting Started

### Prerequisites

- Ruby (ruby 3.2.1)
- Node js (version 18 or higher)
- Setup the development environment first.
- [React Native CLI environment setup](https://reactnative.dev/docs/environment-setup)

### How to install dependencies and run

1. Clone the repository:
 ```
 git clone https://github.com/usmanasifzai/brokazy
 ```

2. Go to the project directory:
 ```
 cd appstem_prototype
 ```

3. Install dependencies:
 ```
 yarn install
 ```

4. Go to the ios directory:
 ```
 cd ios && pod install && cd ..
 ```

5. Run on Android:
 ```
 yarn android
 ```

6. Run on iOS:
 ```
 yarn ios
 ```

### Setup Guide for Android

Once the android development environment setup is completed

- Run `yarn android`

Or you can install and setup android studio.
Then Follow these steps:

- Open `project > android` folder in android studio
- Let android studio build all the gradle files and compile the project for android environment
- Connect your android device or select an android emulator and start the project
- Android studio will compile, build, and install the app

### Setup Guide for iOS

[You need a MAC to run this application on iOS](ttps://reactnative.dev/docs/environment-setup)
Once the iOS development environment setup is completed

- Run `yarn ios`

Or you can install and setup XCode on MAC.
Then Follow these steps:

- Open `project > ios > appstem_prototype.xcworkspace` in XCode
- Connect your iOS device or select an iOS emulator and start the project
- XCode will compile, build, and install the app

### Testing

We have use jest and testing-library/react-native to write the test cases and to run the test cases

```
yarn test
```
