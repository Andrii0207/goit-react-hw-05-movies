import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListName = styled.li`
  list-style: none;
  font-size: 30px;
  font-weight: 500;
  color: black;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover,
  &focus {
    color: orangered;
  }
`;
