import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetailsById } from 'service/api';
// import defaultImage from '../../components/default.jpeg';
import defaultImage from '../../service/default.png';

const MovieDetails = () => {
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

  const { poster_path, release_date, title, name, overview, genres } = movie;
  const base_poster_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <Link to={goBackLink}>Go back</Link>
      <div>
        <img
          src={poster_path ? `${base_poster_url}` + poster_path : defaultImage}
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
        <Link to="cast" stage={{ goBackLink: location }}>
          Cast
        </Link>
        <p></p>
        <Link to="reviews" stage={{ goBackLink: location }}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
