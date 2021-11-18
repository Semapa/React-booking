import React from 'react'
import PropTypes from 'prop-types'
import classes from './card.css'

const CardContent = ({ children }) => {
  return <div className={classes.content}> {children}</div>
}

CardContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}
export default CardContent
