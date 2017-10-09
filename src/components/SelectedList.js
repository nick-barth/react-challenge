import React, { PropTypes } from 'react'

import './SelectedList.css'

function renderText({tagline, name}) {
  return (
    <li className="SelectedList__list-item" key={name}>
      <h1 className="SelectedList__item-title">
        {name}
      </h1>
      <p className="SelectedList__item-tagline">
        {tagline}
      </p>
    </li>
  )
}

function SelectedList({ searchValue, list }) {
  return (
    <ul className="SelectedList">
      {list
        .filter(item => {
          return searchValue === '' || item.name.includes(searchValue.toLowerCase())
        })
        .map(renderText)}
    </ul>
  )
}

SelectedList.propTypes = {
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     tagline: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList
