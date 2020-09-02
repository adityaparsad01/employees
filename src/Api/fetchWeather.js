import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "d4ae28b28ae73eaa1f2ffc11d24239ea";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
