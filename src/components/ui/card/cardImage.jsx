import React from 'react'
import PropTypes from 'prop-types'
import classes from './card.css'

const CardImage = ({ urlImg, alt = '', options = [] }) => {
  const cardClasses = [].concat(
    classes.img,
    options.map((opt) => classes[opt])
  )
  return (
    <div className={cardClasses.join(' ')}>
      <img src={urlImg} alt={alt} />
    </div>
  )
}

CardImage.propTypes = {
  urlImg: PropTypes.string.isRequired,
  alt: PropTypes.string,
  options: PropTypes.array
}

export default CardImage
