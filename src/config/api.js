const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_KEY = "517489a2881eb54bb18bdcdefe59026b";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=hi&category=${category}&apikey=${API_KEY}`;