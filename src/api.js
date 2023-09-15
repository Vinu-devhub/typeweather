const apis = import.meta.env;

export const WEATHER_API_KEY = apis.VITE_WEATHER_API_KEY;
export const WEATHER_API_URL = apis.VITE_WEATHER_API_URL;
export const GEO_API_URL = apis.VITE_GEO_API_URL;
const RAPIDAPI_KEY = apis.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = apis.VITE_RAPIDAPI_HOST;

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_HOST,
  },
};

// export const GEO_API_URL = GEO_API_URL;

// export const WEATHER_API_KEY = WEATHER_API_KEY;

// export const WEATHER_API_URL = WEATHER_API_URL;
