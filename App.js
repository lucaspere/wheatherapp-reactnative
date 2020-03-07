import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  StatusBar
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

const App = () => {

  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState({});

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{city}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>{forecast.summary}</Text>
          <Text style={[styles.largeText, styles.textStyle]}>
            {!forecast.temperature ? <Text>Consulte o clima em tempo real</Text>
              : <Text>{`${forecast.temperature}°C`}</Text>
            }
          </Text>
          <SearchInput
            placeholder="Procurar Cidade"
            setCity={setCity}
            setForecast={setForecast}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      }
    })
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  }
});

export default App;
