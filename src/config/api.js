const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "05a02e3a0c893562c1593c560469c82b";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;