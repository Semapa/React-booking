import React from 'react'
import PropTypes from 'prop-types'
import classes from './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ children, options = [], closeButton }) => {
  const cardClasses = [].concat(
    classes.card,
    options.map((opt) => classes[opt])
  )
  return (
    <div className={cardClasses.join(' ')}>
      {closeButton && (
        <div className={classes.closeButton}>
          <FontAwesomeIcon icon={['fa', 'times']} />
        </div>
      )}
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  options: PropTypes.array,
  closeButton: PropTypes.bool
}

export default Card
