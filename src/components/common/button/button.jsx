import React from 'react'
import PropTypes from 'prop-types'
import classes from './button.css'

const Button = ({ children, typeButton, disabled, onClick }) => {
  const classButton = [classes.button, classes[typeButton]]
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
  typeButton: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
export default Button
