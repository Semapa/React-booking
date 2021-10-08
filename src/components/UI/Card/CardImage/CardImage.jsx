import React from 'react'
import PropTypes from 'prop-types'
import classes from './CardImage.css'

const CardImage = ({ urlImg, alt = '' }) => {
  console.log(alt)
  return (
    <div className={classes.img}>
      <img src={urlImg} alt={alt} />
    </div>
  )
}

CardImage.propTypes = {
  urlImg: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default CardImage
