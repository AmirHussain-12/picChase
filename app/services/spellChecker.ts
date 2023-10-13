import { DICTIONARY } from '../constants/dictionary';

export const spellChecker = (word: string): string[] => {
  const dictionary: { [key: number]: string[] } = DICTIONARY
  
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  
  const words = dictionary[word.length];
  
  if (words.includes(word)) return [word];
  
  word = word.replace(/[aeiou]/g, '[aeiou]');
  
  const answers = JSON.stringify(words).match(new RegExp(word, 'g'));
  
  return answers ? answers : [word];
};
