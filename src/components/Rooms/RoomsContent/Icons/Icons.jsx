import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Icons.css'

const Icons = (props) => {
  console.log('icons', props.icon)
  return (
    <>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className={classes.text}>{props.name}</div>
    </>
  )
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.array.isRequired
}

export default Icons
