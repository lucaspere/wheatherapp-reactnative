import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


const SearchInput = (props) => {

   return (
      <View style={styles.container}>
         <TextInput
            autoCorrect={false}
            placeholder={props.placeholder}
            placeholderTextColor="white"
            style={styles.textInput}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
         />
      </View>
   )
};

const styles = StyleSheet.create({
   textInput: {
      flex: 1,
      color: 'white'
   },
   container: {
      backgroundColor: "#666",
      color: 'white',
      height: 40,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderRadius: 5,
   }
});

export default SearchInput;