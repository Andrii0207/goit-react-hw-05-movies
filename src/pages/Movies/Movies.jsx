import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { serchMoviesByName } from 'service/api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const searchValue = searchParams.get('filter') ?? '';

  const searchMovie = movieName => {
    setSearchParams(movieName !== '' ? { filter: movieName } : {});
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    serchMoviesByName(searchValue).then(responce => {
      if (responce.data.results.length === 0) {
        return Notiflix.Notify.info('Sorry, we have not found any movies. Try enter another name');
      }
      setMovie(responce.data.results);
    });
  }, [searchValue]);

  return (
    <div>
      <SearchBox onChange={searchMovie} />
      <p>Search movies by name</p>
    </div>
  );
};
