import React, { PropTypes } from 'react'

import './Search.css'

function Search(props) {
  const { searchValue, onChange } = props;

  return (
      <input
        className="Search"
        type='text'
        name='searchbar'
        value={searchValue}
        placeholder='Search here!'
        onChange={onChange}
      />
  )
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
