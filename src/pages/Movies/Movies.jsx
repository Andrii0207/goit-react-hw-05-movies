// import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { serchMoviesByName } from 'service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchValue = searchParams.get('filter') ?? '';

  const searchMovie = movieName => {
    setSearchParams(movieName !== '' ? { filter: movieName } : {});
    // console.log(movieName);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    serchMoviesByName(searchValue)
      .then(responce => setMovies(responce.data.results))
      .catch(error => console.log(error.message));
  }, [searchValue]);

  return (
    <div>
      <SearchBox onChange={searchMovie} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
