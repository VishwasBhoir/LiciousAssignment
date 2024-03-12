import React from 'react';
import {View, Text} from 'react-native';

function BookDetails() {
  return (
    <View style={{flex: 0.5, justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 17,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Book Details Here...
      </Text>
    </View>
  );
}

export default BookDetails;
