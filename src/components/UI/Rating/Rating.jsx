import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import classes from './Rating.css'

const renderStars = (numStars) => {
  const stars = []
  for (let i = 0; i < numStars; i += 1) {
    stars.push(
      <span key={i} className={classes.RatingStars}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    )
  }
  return stars
}

const Rating = (props) => {
  return (
    <div className={classes.Rating}>
      <span className={classes.RatingTitle}>{props.title}:</span>
      {renderStars(props.numStars)}
    </div>
  )
}

Rating.propTypes = {
  title: PropTypes.string.isRequired,
  numStars: PropTypes.number.isRequired
}

export default Rating
