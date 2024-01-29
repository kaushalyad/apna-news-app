import moment from "moment";
export const navbarBrand = "Apna News";
export const header = (category) => ` Top Trending ${category} News Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";
export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/categories/general" },
  { nav: "Business", page: "/categories/business" },
  { nav: "Sports", page: "/categories/sports" },
  { nav: "Science", page: "/categories/science" },
  { nav: "Health", page: "/categories/health" },
  { nav: "Entertainment", page: "/categories/entertainment" },
  { nav: "Technology", page: "/categories/technology" },
];

export const router = [
  {
    path: "/",
    key: "general",
    category: "general",
    country: "in",
  },
  {
    path: "/categories/general",
    key: "general",
    category: "general",
    country: "in",
  },
  {
    path: "/categories/business",
    key: "business",
    category: "business",
    country: "in",
  },
  {
    path: "/categories/sports",
    key: "sports",
    category: "sports",
    country: "in",
  },
  {
    path: "/categories/science",
    key: "science",
    category: "science",
    country: "in",
  },
  {
    path: "/categories/health",
    key: "health",
    category: "health",
    country: "in",
  },
  {
    path: "/categories/entertainment",
    key: "entertainment",
    category: "entertainment",
    country: "in",
  },
  {
    path: "/categories/technology",
    key: "technology",
    category: "technology",
    country: "in",
  },
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
