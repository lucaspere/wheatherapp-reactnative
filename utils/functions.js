import * as api from '../utils/api';

export const handleSubmitEditing = (props) => {
   const formattedTextInput = props.textInput.toLowerCase();
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
