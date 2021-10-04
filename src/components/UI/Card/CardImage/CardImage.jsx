import React from 'react'
import PropTypes from 'prop-types'
import classes from './CardImage.css'

const CardImage = ({ urlImg }) => {
  return (
    <div className={classes.img}>
      <img src={urlImg} alt="" />
    </div>
  )
}

CardImage.propTypes = {
  urlImg: PropTypes.string.isRequired
}

export default CardImage
