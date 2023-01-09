import { Outlet } from 'react-router-dom';

import { Container, Header, Link } from './SharedLayout.styled.js';
// import css from './SharedLayout.module.css';
// import { Appbar } from './Appbar';
// console.log(Appbar);

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home button</Link>
          <Link to="/movies">Movies button</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
