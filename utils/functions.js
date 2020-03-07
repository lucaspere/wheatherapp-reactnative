import * as api from '../utils/api';

export const handleSubmitEditing = async (props) => {

   if (!props.textInput) {
      return;
   }

   await props.setLoading(true);

   const formattedTextInput = props.textInput.toLowerCase();

   await api.fetchLocationId(formattedTextInput, (err, data) => {
      if (err) {
         props.setError(true)
         props.setLoading(false);
         throw new Error("Erro no: " + err)
      } else {
         props.setCity(data.location);
         api.fetchWeather(data.longitude, data.latitude, (err, { summary, temperature, icon }) => {
            if (err) {
               props.setError(true)
               props.setLoading(false);
               throw new Error("Deu ruim: " + err);
            } else {
               props.setForecast({ temperature, summary, icon })
               props.setLoading(false);
               props.setError(false)
            }
         })
      }
   })
};
