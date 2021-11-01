import React from 'react'
import PropTypes from 'prop-types'
import classes from './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ children, options, closeButton }) => {
  const cardClasses = [classes.card, classes[options]]
  return (
    <div className={cardClasses.join(' ')}>
      {closeButton && (
        <div className={classes.closeButton}>
          <FontAwesomeIcon icon={['far', 'times-circle']} />
        </div>
      )}
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  options: PropTypes.string,
  closeButton: PropTypes.bool
}

export default Card
