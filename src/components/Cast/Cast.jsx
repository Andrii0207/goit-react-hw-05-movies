import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'service/api';
import { ActorPhoto, ActorName, CharacterName, ImgList } from './Cast.styled';
import defaultImage from '../../service/default.png';

const Cast = () => {
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

  return (
    <div>
      <ul>
        {}
        {cast.map(({ character, name, profile_path, id }) => {
          return (
            <ImgList key={id}>
              {profile_path ? (
                <ActorPhoto src={`${poster_url + profile_path}`} alt={name} width="120" />
              ) : (
                defaultImage
              )}

              <ActorName>{name}</ActorName>
              {character && <CharacterName>Character: {character}</CharacterName>}
            </ImgList>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
