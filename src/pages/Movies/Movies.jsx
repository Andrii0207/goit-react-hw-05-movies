import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { serchMoviesByName } from 'service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
// import movieLibrary from '../../service/default2.jpeg';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchValue = searchParams.get('filter') ?? '';

  const defaultImage =
    'https://domovyk.in.ua/wa-data/public/shop/products/12/57/115712/images/53923860/53923860.970.jpg';

  const searchMovie = movieName => {
    setSearchParams(movieName !== '' ? { filter: movieName } : {});
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    serchMoviesByName(searchValue)
      .then(responce => {
        if (responce.data.results.length === 0) {
          return Notiflix.Notify.warning('Sorry, we have found any films... Try again');
        }
        setMovies(responce.data.results);
      })
      .catch(error => console.log(error.message));
  }, [searchValue]);

  return (
    <div>
      <SearchBox onChange={searchMovie} />
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <img src={defaultImage} alt={defaultImage} width="100%" />
      )}
    </div>
  );
};

export default Movies;
