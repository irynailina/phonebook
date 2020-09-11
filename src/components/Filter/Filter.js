import React from "react";
import styles from "./filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ addFilter }) => {
  const filterChange = (e) => {
    addFilter(e.target.value);
  };

  return (
    <>
      <div className={styles.findWrap}>
        <label className={styles.search}>Find contacts by name:</label>
        <input className={styles.searchInput} onChange={filterChange}></input>
      </div>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  addFilter: PropTypes.func,
};
