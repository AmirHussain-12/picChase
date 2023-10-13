import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import ListImages from '../components/ListImages';
import Search from '../components/Search';
import {getImages} from '../services/getImage';
import Suggessions from '../components/Suggessions';
import HomeIcon from '../assets/homeIcon';

interface HomeScreenProps {}

export default function HomeScreen({}: HomeScreenProps) {
  const [images, setImages] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [suggessions, setSuggessions] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [item, setItem] = useState<any>('');

  const getResponse = async (word: string) => {
    try {
      const response = await getImages(word);
      setImages(response?.data?.hits);
    } catch {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const closeModal = () => setVisible(false);

  useEffect(() => {
    getResponse('');
  }, []);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <HomeIcon />
      </View>
      <View style={styles.mb}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </View>
      {suggessions?.length > 0 && (
        <>
          <Text style={styles.suggestionHeaderText}>
            You searched <Text style={styles.boldText}>{query}</Text>
          </Text>
          <Suggessions
            handleClick={getResponse}
            suggessions={suggessions}
            searchTerm={searchTerm}
          />
        </>
      )}
      <ListImages images={images} setVisible={setVisible} setItem={setItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  mb: {
    marginBottom: 10,
  },
  mainText: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  suggestionHeaderText: {
    fontSize: 16,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
