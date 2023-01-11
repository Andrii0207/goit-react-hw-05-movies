import axios from 'axios';

const API_KEY = '430ce39ddbb6d767664f5ab1d9d53645';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_URL = 'trending/all/day';
const SEARCH_MOVIE_URL = 'search/movie';
const MOVIE_INFO = 'movie';

export const getTrendingMovies = async () => {
  const responce = await axios.get(`${BASE_URL}/${TRENDING_URL}?api_key=${API_KEY}`);
  return responce;
};

// export const serchMoviesByName = async (value) => {
//     const responce = await axios.get(`${BASE_URL}/${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${value}`)
//     return responce;
// }

// export const getMovieInfo = async (id) => {
//     const responce = await axios.get(`${BASE_URL}/${MOVIE_INFO}/${{id}}?api_key${API_KEY}`)
//     return responce;
// }

// export const getMovieCredits = async () => {
//     const responce = await axios.get(`${BASE_URL}/${MOVIE_INFO}/${id}/credits?api_key=${API_KEY}`)
//     return responce;
// }

// export const getMovieReviews = async (id) => {
//     const responce = await axios.get(`${BASE_URL}/${MOVIE_INFO}/${id}/reviews/?api_key=${API_KEY}`)
//     return responce;
// }
