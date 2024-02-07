const Filter = ({ value, onChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

export { Filter };
