import React from 'react'
import PropTypes from 'prop-types'
import classes from './card.css'

const CardContent = ({ children, options = [] }) => {
  const cardClasses = [].concat(
    classes.content,
    options.map((opt) => classes[opt])
  )
  return <div className={cardClasses.join(' ')}> {children}</div>
}

CardContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  options: PropTypes.array
}
export default CardContent
