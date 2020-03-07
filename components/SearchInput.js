import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { handleSubmitEditing } from '../utils/functions';

const SearchInput = (props) => {

   const [textInput, setTextInput] = useState("");

   const { setForecast, setCity, setLoading, setError } = props;
   return (
      <View style={styles.container}>
         <TextInput
            autoCorrect={false}
            placeholder={props.placeholder}
            placeholderTextColor="white"
            style={styles.textInput}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            value={textInput}
            onChangeText={text => setTextInput(text)}
            onSubmitEditing={() => handleSubmitEditing({
               textInput,
               setForecast,
               setCity,
               setLoading,
               setError
            })}
         />
      </View>
   )
};

const styles = StyleSheet.create({
   container: {
      color: 'white',
      height: 40,
      borderRadius: 5,
      backgroundColor: "#666",
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
   },
   textInput: {
      flex: 1,
      color: 'white'
   },
});

export default SearchInput;