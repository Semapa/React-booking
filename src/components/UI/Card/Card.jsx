import React from 'react'
import classes from './Card.css'

const card = (props) => {
  console.log('props', props.id)
  return (
    <>
      <div className={classes.Card}>
        <img src={props.img} alt="" />
        <div className={classes.title}>{props.title}</div>
      </div>
    </>
  )
}

export default card
