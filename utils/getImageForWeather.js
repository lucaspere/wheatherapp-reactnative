const getImageForWeather = (wheather) => {
   const images = {
      'clear-night': require('../assets/clear-day.jpg'),
      'clear-day': require('../assets/clear-day.png'),
      hail: require('../assets/hail.png'),
      cloudy: require('../assets/heavy-cloud.png'),
      'partly-cloudy-day': require('../assets/light-cloud.png'),
      rain: require('../assets/heavy-rain.png'),
      sleet: require('../assets/sleet.png'),
      snow: require('../assets/snow.png'),
      thunderstorm: require('../assets/thunder.png'),
   };

   return images[wheather]
}


export default getImageForWeather;