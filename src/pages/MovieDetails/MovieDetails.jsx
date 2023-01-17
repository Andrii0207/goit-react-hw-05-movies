import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { getMovieDetailsById } from 'service/api';
import defaultImage from '../../service/default.png';
import {
  ImgWrapper,
  FilmNameWrapper,
  FilmName,
  FilmRelease,
  OverviewName,
  OverviewText,
  GenresName,
  OverviewGenres,
  NavLink,
  AddInfo,
  CastInfo,
  ReviewInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});

  const goBackLink = location.state?.from ?? '/movies';
  const refLocation = useRef(location.state?.location);

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
      <NavLink to={refLocation.current ?? goBackLink}>Go back</NavLink>
      <ImgWrapper>
        <div>
          <img
            src={poster_path ? `${base_poster_url}` + poster_path : defaultImage}
            alt={title || name}
            width="250px"
          />
        </div>
        <FilmNameWrapper>
          <FilmName>{title}</FilmName>
          <FilmRelease>({release_date ? release_date.slice(0, 4) : release_date})</FilmRelease>
          <OverviewName>Overview</OverviewName>
          <OverviewText>{overview}</OverviewText>
          <GenresName>Genres</GenresName>
          <OverviewGenres>
            {genres && genres.length > 0
              ? genres.map(genre => genre.name).join(', ')
              : 'There are no genres'}
          </OverviewGenres>
        </FilmNameWrapper>
      </ImgWrapper>

      <div>
        <AddInfo>Additional information</AddInfo>
        <CastInfo to="cast" state={{ from: goBackLink }}>
          Cast
        </CastInfo>

        <ReviewInfo to="reviews" state={{ from: goBackLink }}>
          Reviews
        </ReviewInfo>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
