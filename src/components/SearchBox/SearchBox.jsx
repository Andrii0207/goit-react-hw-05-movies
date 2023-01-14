import Notiflix from 'notiflix';
import { useState } from 'react';

export const SearchBox = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();

    if (!query) {
      return Notiflix.Notify.info('Please enter film name');
    }
    onChange(query);

    setQuery('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" placeholder="enter movie name to search" onChange={handleChange} />
      <button type="submit">search</button>
    </form>
  );
};
