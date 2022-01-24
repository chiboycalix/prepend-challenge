import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <input
      placeholder="search pokemon by name"
      className={styles.searchInput}
      autoFocus={true}
    />
  );
};

export default Search;
