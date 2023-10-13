import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchIcon from '../assets/searchIcon';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSpellChecker: () => void;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<SearchProps> = ({
  searchTerm,
  setSearchTerm,
  handleSpellChecker,
  setLoader,
}) => {
  const [errors, setErrors] = useState<string>('');

  const handleSearch = async () => {
    if (searchTerm === '') {
      setErrors('Please fill required field');
      return;
    }
    setErrors('');
    setLoader(true);
    await handleSpellChecker();
    setTimeout(() => {
      setLoader(false);
    }, 300);
  };

  return (
    <>
      <View style={[styles.searchContainer, styles.imageCard]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
            placeholder="Search for images..."
          />
        </View>
        <TouchableOpacity
          testID="search-button"
          onPress={handleSearch}
          style={styles.btn}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      {errors && <Text style={styles.errors}>{errors}</Text>}
    </>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: 'lightgray',
    margin: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputContainer: {
    padding: 10,
    width: '85%',
  },
  input: {
    flex: 1,
  },
  imageCard: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#FFFFFF',
  },
  btn: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 13,
    backgroundColor: '#f2f2f2',
  },
  suggestionHeaderText: {
    fontSize: 16,
    marginVertical: 10,
  },
  suggestionList: {
    marginTop: 5,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  suggestionItem: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  suggestionText: {
    color: '#333',
    fontSize: 14,
  },
  errors: {color: 'red', marginVertical: 10},
});
