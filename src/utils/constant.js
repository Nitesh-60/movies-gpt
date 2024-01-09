export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500";
