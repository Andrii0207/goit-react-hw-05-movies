export const SearchBox = ({ onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="enter movie name to search"
        onChange={e => onChange(e.target.value)}
      />
      <button type="button">search</button>
    </div>
  );
};
