import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'service/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      {error && <h1>Opps, {error.message}. Please reload the page</h1>}
      {!error && (
        <>
          <h1>Trending movies</h1>
          <MoviesList movies={movies} />
        </>
      )}
    </div>
  );
};
