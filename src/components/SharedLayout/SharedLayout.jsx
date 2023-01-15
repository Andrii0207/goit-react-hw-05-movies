import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Header, Link } from './SharedLayout.styled.js';
// import css from './SharedLayout.module.css';
// import { Appbar } from './Appbar';
// console.log(Appbar);

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/movies">Movies </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
