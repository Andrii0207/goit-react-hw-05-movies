import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(resp => setReviews(resp.data.results));
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </div>
  );

  // return <div>Reviews component</div>;
};
