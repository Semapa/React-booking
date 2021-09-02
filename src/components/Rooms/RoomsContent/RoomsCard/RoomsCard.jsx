import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Rating from './Rating/Rating'
import Icons from './Icons/Icons'
import classes from './RoomsCard.css'

const card = (props) => {
  console.log('props', props)
  return (
    <>
      <div className={classes.Card}>
        <div className={classes.CardImg}>
          <img src={props.img} alt="" />
        </div>
        <div className={classes.CardContent}>
          <div className={classes.CardContentTitle}>{props.title}</div>
          <Rating />
          <div className={classes.CardContentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in
            vero corporis officiis ratione distinctio
          </div>
        </div>
        <div className={classes.CardSelect}>
          <a href="/">
            <span>ПОДРОБНЕЕ</span>
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </a>
        </div>
        <div className={classes.CardIcons}>
          {props.options.map((item) => (
            <Icons key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default card