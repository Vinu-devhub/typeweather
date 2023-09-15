const apis = import.meta.env;

const VITE_WEATHER_API_KEY = apis.VITE_WEATHER_API_KEY;
const VITE_WEATHER_API_URL = apis.VITE_WEATHER_API_URL;
const VITE_GEO_API_URL = apis.VITE_GEO_API_URL;
const VITE_RAPIDAPI_KEY = apis.VITE_RAPIDAPI_KEY;
const VITE_RAPIDAPI_HOST = apis.VITE_RAPIDAPI_HOST;

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": VITE_RAPIDAPI_HOST,
  },
};

export const GEO_API_URL = VITE_GEO_API_URL;

export const WEATHER_API_KEY = VITE_WEATHER_API_KEY;

export const WEATHER_API_URL = VITE_WEATHER_API_URL;
