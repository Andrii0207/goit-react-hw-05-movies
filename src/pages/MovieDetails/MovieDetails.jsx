import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailsById } from 'service/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});

  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetailsById(Number(movieId))
      .then(movie => setMovie(movie.data))
      .catch(error => console.log(error.message));
  }, [movieId]);

  if (!movie) {
    return;
  }
  // console.log(location.state.from);

  // console.log('MovieDetails movie.data', movie);

  const { poster_path, release_date, title, name, overview, genres } = movie;
  const base_poster_url = 'https://image.tmdb.org/t/p/w500';
  const image_plug =
    'https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg';

  return (
    <div>
      <Link to={goBackLink}>Go back</Link>
      <div>
        <img
          src={poster_path ? `${base_poster_url}` + poster_path : image_plug}
          alt={title || name}
        />
        <div>
          <h1>{title}</h1>
          <p>({release_date ? release_date.slice(0, 4) : release_date})</p>
        </div>
      </div>
      <div>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>
          {genres && genres.length > 0
            ? genres.map(genre => genre.name).join(', ')
            : 'There are no genres'}
        </p>
      </div>

      <div>
        <p>
          <b>Additional information</b>
        </p>
        <Link to="cast">Cast</Link>
        <p></p>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
