import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Icons.css'

const icons = (props) => {
  console.log('items', props)
  return (
    <>
      <div>{/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}</div>
      {/* <FontAwesomeIcon icon={props.icon} /> */}
      <div className={classes.Icon}>{props.name}</div>
    </>
  )
}

export default icons
