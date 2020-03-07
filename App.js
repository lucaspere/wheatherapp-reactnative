import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { handleSubmitEditing } from './utils/functions'

SearchInput.propTypes = {
  setCity: PropTypes.func.isRequired,
  setForecast: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

SearchInput.defaultProps = {
  placeholder: ''
}

const App = () => {

  const [city, setCity] = useState("Raposos");
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  React.useEffect(() => {
    handleSubmitEditing({
      textInput: city,
      setCity,
      setForecast,
      setLoading,
      setError
    })
  }, [])

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(forecast.icon)}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large" />

          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Não conseguimos buscar o clima. Por favor, tente outra cidade.
                </Text>
              )}
              {!error && (
                <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {city}
                  </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>
                    {forecast.summary}
                  </Text>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {`${Number(Math.round(forecast.temperature))}°C`}
                  </Text>
                </View>
              )}
              <SearchInput
                placeholder="Procurar Cidade"
                setCity={setCity}
                setForecast={setForecast}
                setLoading={setLoading}
                setError={setError}
              />
            </View>
          )}

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
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default App;
