import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import classes from './Rating.css'

const rating = () => {
  return (
    <div className={classes.Rating}>
      <span className={classes.RatingTitle}>РЕЙТИНГ:</span>
      <span className={classes.RatingStars}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    </div>
  )
}

export default rating
