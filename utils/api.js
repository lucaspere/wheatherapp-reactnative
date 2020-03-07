import axios from 'axios';

export const fetchLocationId = async (city, callback) => {
   console.log(city)
   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic291ZG9ndWV0byIsImEiOiJjanRoamtvbnUwYXNsNGFwNWswNWEycHY1In0.TmA0JX_1xWG0MTijm5qEow&limit=1`;
   try {
      const {data} = await axios.get(url);
      if (data.features.length === 0) {
         return callback("Cidade não encontrada. Tente outra cidade", undefined);
      }

      callback(undefined, {
         longitude: data.features[0].center[0],
         latitude: data.features[0].center[1],
         location: data.features[0].text
      });

   } catch (e) {

      callback(e, undefined);

   }
}

export const fetchWeather = async (longitude, latitude, language, callback) => {
   const url = `https://api.darksky.net/forecast/1602e381a94491ded4f1838cbf2e6dc6/${latitude},${longitude}?exclude=flags&units=si&lang=${language}`;

   try {

      const response = await axios.get(url);

      const data = typeof response.data === 'object' ? response.data : JSON.parse(response.data);

      if(data.message) {
         return callback(data.message, undefined)
      }

      const { summary, temperature, } = data.currently;

      return callback(undefined, {
         summary,
         temperature
      });

   } catch (e) {

      callback(e, undefined);

   }


}