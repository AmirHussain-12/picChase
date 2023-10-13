import {spellChecker} from '../app/services/spellChecker';

describe('spellChecker', () => {
  it('returns the word if it exists in the dictionary', () => {
    const word = 'example';
    const result = spellChecker(word);
    expect(result).toEqual([word]);
  });

  it("returns similar words if the word doesn't exist in the dictionary but matches the pattern of some words", () => {
    const word = 'exemple';
    const result = spellChecker(word);
    expect(result).toContain('example');
  });

  it('returns the word itself if no matches are found in the dictionary', () => {
    const word = 'zzz';
    const result = spellChecker(word);
    expect(result).toEqual([word]);
  });
});
