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

export const serchMoviesByName = async movie_name => {
  const responce = await axios.get(
    `${BASE_URL}/${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${movie_name}`,
  );
  return responce;
};

export const getMovieDetailsById = async movie_id => {
  const responce = await axios.get(`${BASE_URL}/${MOVIE_INFO}/${movie_id}?api_key=${API_KEY}`);
  return responce;
};

export const getMovieCredits = async movie_id => {
  const responce = await axios.get(
    `${BASE_URL}/${MOVIE_INFO}/${movie_id}/credits?api_key=${API_KEY}`,
  );
  return responce;
};

export const getMovieReviews = async movie_id => {
  const responce = await axios.get(
    `${BASE_URL}/${MOVIE_INFO}/${movie_id}/reviews?api_key=${API_KEY}`,
  );
  return responce;
};
