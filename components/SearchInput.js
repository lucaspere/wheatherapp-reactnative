import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import * as api from '../utils/api';

const SearchInput = (props) => {

   const [textInput, setTextInput] = useState("");

   const handleSubmitEditing = () => {
      const formattedTextInput = textInput.toLowerCase();
      api.fetchLocationId(formattedTextInput, (err, data) => {
         if (err) {
            throw new Error("Aff: " + err)
         } else {
            props.setCity(data.location);
            api.fetchWeather(data.longitude, data.latitude, (err, { summary, temperature }) => {
               if (err) {
                  throw new Error("Deu ruim: " + err);
               } else {
                  props.setForecast({ temperature, summary })
               }
            })
         }
      })
   };

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
            onSubmitEditing={handleSubmitEditing}
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