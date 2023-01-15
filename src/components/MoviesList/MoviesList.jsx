import { useLocation } from 'react-router-dom';
import { MoviesListName, NavLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <MoviesListName key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title ? title : name}
          </NavLink>
        </MoviesListName>
      ))}
    </ul>
  );
};
