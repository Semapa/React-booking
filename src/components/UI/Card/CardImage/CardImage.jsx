import React from 'react'
import PropTypes from 'prop-types'
import classes from './CardImage.css'

const CardImage = (props) => {
  return (
    <div className={classes.img}>
      <img src={props.urlImg} alt="" />
    </div>
  )
}

CardImage.propTypes = {
  urlImg: PropTypes.string.isRequired
}

export default CardImage
