import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import * as api from '../utils/api';

const SearchInput = (props) => {

   const [textInput, setTextInput] = useState("");
   const [city, setCity] = useState("");
   return (
      <View style={styles.container}>
         <TextInput
            autoCorrect={false}
            placeholder={props.placeholder}
            placeholderTextColor="white"
            style={styles.textInput}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            onChangeText={text => setTextInput(text)}
         />
         <Button
            style={styles.button}
            title="Buscar"
            onPress={() => {
               const formattedTextInput = textInput.toLowerCase();
               api.fetchLocationId(formattedTextInput, (err, data) => {
                  if (err) {
                     throw new Error("Aff")
                  } else {
                     setCity(data.location);
                     api.fetchWeather(data.longitude, data.latitude, 'pt', (err, response) => {
                        if (err) {
                           throw new Error("Deu ruim: " + err);
                        } else {
                           console.log(response)
                        }

                     })
                  }
               })
            }}
         />
      </View>
   )
};

const styles = StyleSheet.create({
   container: {
      color: 'white',
      height: 100,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
   },
   textInput: {
      flex: 1,
      borderRadius: 5,
      backgroundColor: "#666",
      height: 40,
      width: 300,
      color: 'white'
   },
   button: {
      flex: 1,
      marginTop: 500
   }
});

export default SearchInput;