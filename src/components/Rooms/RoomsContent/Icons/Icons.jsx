import React from 'react'
import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Icons.css'

const Icons = (props) => {
  console.log('items', props)
  return (
    <>
      <div>{/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}</div>
      {/* <FontAwesomeIcon icon={props.icon} /> */}
      <div className={classes.icon}>{props.name}</div>
    </>
  )
}

Icons.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icons
