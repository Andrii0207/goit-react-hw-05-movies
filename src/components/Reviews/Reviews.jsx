import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/api';

const Reviews = () => {
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
      {reviews.length ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <div>
          <p>There are no reviews for this movie</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
