import React, { PropTypes } from 'react'

import './SelectedList.css'

function renderText({id, text}) {
  return (
    <li className="SelectedList__list-item">
      {text}
    </li>
  )
}

function SelectedList({ searchValue, list }) {
  return (
    <ul className="SelectedList">
      {list
        .filter(item => {
          return searchValue === '' || item.text.includes(searchValue)
        })
        .map(renderText)}
    </ul>
  )
}

SelectedList.propTypes = {
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList
