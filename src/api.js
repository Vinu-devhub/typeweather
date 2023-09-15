const apis = JSON.stringify(import.meta.env);

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apis.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": apis.VITE_RAPIDAPI_HOST,
  },
};

export const GEO_API_URL = apis.VITE_GEO_API_URL;

export const WEATHER_API_KEY = apis.VITE_WEATHER_API_KEY;

export const WEATHER_API_URL = apis.VITE_WEATHER_API_URL;
