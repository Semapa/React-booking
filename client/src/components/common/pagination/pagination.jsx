import React from 'react'
import PropTypes from 'prop-types'
import classes from './pagination.css'
import _ from 'lodash'

const Pagination = ({ onPageChange, itemCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount === 1) return null
  // Создаем массив из номеров страниц(+1 т.к. в метод не включается последний элемент)
  const pages = _.range(1, pageCount + 1)

  return (
    <nav className={classes.pagination}>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a
              className={page === currentPage ? classes.active : ''}
              onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
