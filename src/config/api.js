const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_KEY = "1db342ecd7dd595cb37f73348e601641";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=hi&category=${category}&apikey=${API_KEY}`;