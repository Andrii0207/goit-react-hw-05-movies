import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 1px solid black;

  &:hover,
  &:focus {
    background: grey;
    color: white;
  }

  &.active {
    &.active {
      color: black;
      background: rgb(191, 255, 0);
      border: 2px solid red;
    }
  }
`;
