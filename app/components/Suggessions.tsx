import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface SuggestionsProps {
  suggessions: string[];
  searchTerm: string;
  handleClick: (query: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  handleClick,
  suggessions,
  searchTerm,
}) => {
  const [selected, setSelected] = useState<string>(searchTerm);

  const handleSelected = (item: string) => {
    setSelected(item);
    handleClick(item);
  };
  return (
    <View>
      <Text style={styles.suggestionHeaderText}>
        Show results of <Text style={styles.boldText}>{selected}</Text>
      </Text>
      <FlatList
        data={suggessions}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.suggestionList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleSelected(item)}
            style={
              selected === item ? styles.selectedItem : styles.suggestionItem
            }>
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: 'lightgray',
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
    marginVertical: 5,
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
  selectedItem: {
    backgroundColor: '#a2a2a2',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  suggestionText: {
    color: '#333',
    fontSize: 14,
  },
});
