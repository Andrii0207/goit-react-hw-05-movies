import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'service/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(resp => setCast(resp.data.cast))
      .catch(error => console.log(error.message));
  }, [movieId]);

  if (!cast) {
    return null;
  }

  const poster_url = 'https://image.tmdb.org/t/p/w500';

  // console.log(cast);

  return (
    <div>
      <ul>
        {cast.map(({ character, name, profile_path, id }) => {
          return (
            <li key={id}>
              <img src={`${poster_url + profile_path}`} alt={name} width="150" />
              <p>{name}</p>
              {character && <p>Character: {character}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
