import axios from "axios";

const WeatherService = {
    getData(long,lat) {
        return axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=9dd86907fe501cec50da3d087e4e9dc0&units=metric&lang=ru`);
    },
    async getCityLonLat(city) {
        const responseLatLon = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9dd86907fe501cec50da3d087e4e9dc0`);
        return {
            lat: responseLatLon.data[0].lat,
            lon: responseLatLon.data[0].lon
        }
    }
}

export default WeatherService;
