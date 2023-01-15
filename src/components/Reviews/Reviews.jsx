import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/api';
import { ReviewsList, ReviewsDescription, ReviewsName } from './Reviews.styled';

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
            <ReviewsList key={id}>
              <ReviewsName>{author}</ReviewsName>
              <ReviewsDescription>{content}</ReviewsDescription>
            </ReviewsList>
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
