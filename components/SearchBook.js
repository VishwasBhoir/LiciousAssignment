import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useEffect, useState} from 'react';

const SearchBook = ({searchText, setSearchText}) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Type to search the Book..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

export default SearchBook;

const styles = StyleSheet.create({
  textInputContainer: {
    width: wp('95%'),
    height: hp('5%'),
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignSelf: 'center',
  },
  searchInput: {
    width: wp('90%'),
    height: hp('6%'),
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  buttonText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
