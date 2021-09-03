import React from 'react'
import PropTypes from 'prop-types'
import classes from './CardContent.css'

const CardContent = (props) => {
  return <div className={classes.content}> {props.children}</div>
}

CardContent.propTypes = {
  children: PropTypes.array.isRequired
}
export default CardContent
