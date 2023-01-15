import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  height: 30px;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 36px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid darkgrey;
  border-radius: 3px;
  color: orangered;

  :hover,
  :focus {
    color: white;
    background-color: orangered;
  }
`;
