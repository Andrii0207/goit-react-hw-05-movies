import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { MoviesList } from './MoviesList/MoviesList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<MoviesList />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast">{<>cast_component</>}</Route>
            <Route path="reviews">{<>reviews_component</>}</Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
