import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './icons.css'

const Icons = (props) => {
  console.log('Icons props', props)
  const iconArray = props.icon.split(',')
  console.log('iconArray', iconArray)

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
  icon: PropTypes.array.isRequired
}

export default Icons
