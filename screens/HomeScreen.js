import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SearchBook from '../components/SearchBook';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

function HomeScreen({navigation}) {
  const [booksData, setBooksData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    const data = await fetch(
      'https://openlibrary.org/subjects/sci-fi.json?details=true',
    );
    const jsonData = await data.json();
    setBooksData(jsonData?.works);
  };

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const RenderBook = ({title, author, status}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BookDetails', {title: title, author, status})
        }>
        <View style={styles.booksListContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text>Authers: {author}</Text>
          <Text>Availability: {status}</Text>
          {/* <Image
          source={{uri: book.coverImage}}
          style={{width: 100, height: 100}}
        /> */}

          {/* <Text>Genre: {genre}</Text>
        <Text>Publication Year: {publicationYear}</Text>
        <Text>Description: {description}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, height: 400}}>
      <SearchBook searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        data={filteredBooks}
        renderItem={({item}) => (
          <RenderBook
            title={item.title}
            author={item.authors[0].name}
            availability={item.availability?.status}
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  booksListContainer: {
    // borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 1,
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
