import Notiflix from 'notiflix';
import { useState } from 'react';
import { Input, SearchButton } from './SearchBox.styled';

export const SearchBox = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();

    if (!query) {
      return Notiflix.Notify.info('Please enter a film name');
    }

    onChange(query);
    evt.target.reset();
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <Input type="text" placeholder="enter movie name to search" onChange={handleChange} />
      <SearchButton type="submit">search</SearchButton>
    </form>
  );
};
