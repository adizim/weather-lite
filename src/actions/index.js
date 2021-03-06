import Axios from 'axios';

const API_KEY = "8acbefc66558dec1db4b8a18d81efaf2";

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = Axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}