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

  const { id, poster_path, release_date, title, name } = movie;
  const base_poster_url = 'https://image.tmdb.org/t/p/w500';
  const image_plug =
    'https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg';

  return (
    <div>
      <p>{id}</p>

      <img
        src={poster_path ? `${base_poster_url}` + poster_path : image_plug}
        alt={title || name}
      />
      <p>useParams: {movieId}</p>
      <div>{release_date}</div>
    </div>
  );
};
