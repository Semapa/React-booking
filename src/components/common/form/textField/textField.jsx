import { React, useState } from 'react'
import PropTypes from 'prop-types'
import classes from './textField.css'
import Button from '../../../../components/common/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder
}) => {
  //   const fieldClasses = [classes.textField]

  const [showPassword, setShowPassword] = useState(false)

  const getInputClasses = () => {
    // return 'form-control' + (error ? ' is-invalid' : '')
    return classes.text
  }

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className={classes.wrapper}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div className={classes.field}>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <Button
            typeButton={'password'}
            type="button"
            onClick={toggleShowPassword}>
            {showPassword ? (
              <FontAwesomeIcon icon={['far', 'eye-slash']} />
            ) : (
              <FontAwesomeIcon icon={['far', 'eye']} />
            )}
          </Button>
        )}
      </div>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextField
