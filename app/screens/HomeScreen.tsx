import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet, ActivityIndicator} from 'react-native';
import CustomModal from '../components/CustomModal';
import {spellChecker} from '../services/spellChecker';
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
  const [loader, setLoader] = useState<boolean>(false);

  const handleSpellChecker = async () => {
    const response = await spellChecker(searchTerm);
    setSuggessions(response.slice(1, response.length));
    setQuery(response[0]);
    getResponse(response[0]);
  };

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
      <View style={styles.icon}>
        <HomeIcon />
      </View>
      <View style={styles.mb}>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSpellChecker={handleSpellChecker}
          setLoader={setLoader}
        />
      </View>
      <View style={styles.mh}>
        {suggessions?.length > 0 && (
          <>
            <Text style={styles.suggestionHeaderText}>
              Show results of <Text style={styles.boldText}>{query}</Text>
            </Text>
            <Suggessions
              handleClick={getResponse}
              suggessions={suggessions}
              searchTerm={searchTerm}
            />
          </>
        )}
      </View>
      {loader ? (
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color="lightblue"
            style={styles.loader}
          />
        </View>
      ) : (
        <ListImages images={images} setVisible={setVisible} setItem={setItem} />
      )}

      <CustomModal visible={visible} closeModal={closeModal} item={item} />
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
  },
  boldText: {
    fontWeight: 'bold',
  },
  mh: {
    marginHorizontal: 10,
  },
  icon: {justifyContent: 'center', alignItems: 'center'},
  loader: {transform: [{scaleX: 1.5}, {scaleY: 1.5}]},
});
