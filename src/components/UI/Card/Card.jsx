import React from 'react'
import PropTypes from 'prop-types'
import classes from './Card.css'

const Card = ({ children, options }) => {
  const cardClasses = [classes.card, classes[options]]
  return <div className={cardClasses.join(' ')}>{children} </div>
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  options: PropTypes.string
}

export default Card
