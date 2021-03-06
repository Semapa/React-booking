import React from 'react'
import PropTypes from 'prop-types'
import classes from './button.css'

const Button = ({ children, typeButton, disabled, onClick, type, id = '' }) => {
  const classButton = [classes.button, classes[typeButton]]
  return (
    <button
      onClick={onClick}
      className={classButton.join(' ')}
      disabled={disabled}
      type={type}
      data-id={id}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  typeButton: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
export default Button
