import styles from './inputElem.module.scss';

const InputElem = () => {
  return (
      <form
        onSubmit={undefined}
        name="form"
        className={styles['search-wrapper']}
      >
        <input
          type="text"
          placeholder="Search youre favorite anime..."
          value={undefined}
          onChange={undefined}
          className={styles['search-input']}
        ></input>
        <button type="submit" className={styles['search-button']}>
          Search
        </button>
      </form>
  );
};

export default InputElem;
