import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  font-size: 25px;
  text-decoration: none;

  border-radius: 5px;
  border: 1px solid black;
  color: black;

  :hover,
  :focus {
    background: orangered;
    color: white;
    border: 1px solid black;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  margin: 40px 0;
`;

export const FilmNameWrapper = styled.div`
  font-size: 20px;
  margin-left: 50px;
`;

export const FilmName = styled.h1`
  font-size: 25px;
  font-weight: 700;
  display: inline;
  margin-right: 10px;
`;

export const FilmRelease = styled.p`
  font-size: 25px;
  font-weight: 700;
  display: inline;
`;

export const OverviewName = styled.div`
  max-width: 350px;
  font-size: 25px;
  font-weight: 700;
  margin-top: 30px;
`;

export const OverviewText = styled.p`
  font-size: 20px;
  font-weight: 400;
  max-width: 700px;
`;

export const GenresName = styled.h2`
  font-size: 25px;
  font-weight: 700;
`;
export const OverviewGenres = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const AddInfo = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const CastInfo = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  display: block;

  :hover,
  :focus {
    color: orangered;
  }
`;

export const ReviewInfo = styled(Link)`
  font-size: 20px;
  font-weight: 500;

  :hover,
  :focus {
    color: orangered;
  }
`;
