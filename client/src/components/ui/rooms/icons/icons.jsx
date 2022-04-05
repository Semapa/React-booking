import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './icons.css'

const Icons = (props) => {
  // преобразуем строку в массив
  const iconArray = props.icon.split(',')

  return (
    <>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={iconArray} />
      </div>
      <div className={classes.text}>{props.name}</div>
    </>
  )
}

Icons.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string.isRequired
}

export default Icons
