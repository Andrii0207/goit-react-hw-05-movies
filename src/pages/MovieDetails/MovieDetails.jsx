import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailsById } from 'service/api';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieDetailsById(Number(movieId))
      .then(movie => setMovie(movie.data))
      .catch(error => setError(error));
  }, [movieId]);

  if (!movie) {
    return;
  }

  console.log('MovieDetails movie.data', movie);

  const { id } = movie;
  const base_poster_url = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <p>useParams: {movieId}</p>
      <>{id}</>
    </div>
  );
};
