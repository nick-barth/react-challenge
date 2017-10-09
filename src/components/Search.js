import React, { PropTypes } from 'react'

import './Search.css'

function Search(props) {
  const { searchValue, onChange } = props;

  return (
    <div className="Search__container">
      <div className="Search__field">
        <input
          className="Search"
          type='text'
          name='searchbar'
          value={searchValue}
          placeholder='Search here!'
          onChange={onChange}
        />
        <label for="searchbar">Filter</label>
      </div>
    </div>
  )
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
