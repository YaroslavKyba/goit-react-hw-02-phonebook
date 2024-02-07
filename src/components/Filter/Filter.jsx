import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filterLabel}>
      <span className={css.filterTitle}>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.filterInput}
      ></input>
    </label>
  );
};

export { Filter };
