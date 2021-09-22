import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.css'

const Button = ({ children, type, disabled, onClick }) => {
  const classButton = [classes.button, classes[type]]
  return (
    <button
      onClick={onClick}
      className={classButton.join(' ')}
      disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
export default Button
