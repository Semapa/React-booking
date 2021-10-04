import React from 'react'
import PropTypes from 'prop-types'
import classes from './Card.css'

const Card = ({ children, position }) => {
  const cardClasses = [classes.card, classes[position]]
  console.log('cardClasses', cardClasses)
  return <div className={cardClasses.join(' ')}>{children} </div>
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  position: PropTypes.string
}

export default Card
