import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(resp => console.log(resp.data));
  }, [movieId]);

  if (reviews) {
    return null;
  }
  console.log('Reviews reviews:', reviews);

  return (
    <div>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author</p>
            <p>Content</p>
          </li>
        );
      })}
    </div>
  );

  // return <div>Reviews component</div>;
};
