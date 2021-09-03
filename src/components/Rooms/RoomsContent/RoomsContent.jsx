import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import classes from './RoomsContent.css'
import api from '../../../api/index'
import Card from '../../UI/Card/Card'
import CardImage from '../../UI/Card/CardImage/CardImage'
import CardContent from '../../UI/Card/CardContent/CardContent'
import Rating from '../../UI/Rating/Rating'
import Icons from './Icons/Icons'

const rooms = api.rooms.fetchAll()

const RoomsContent = () => {
  return (
    <div className={classes.wrapper}>
      {rooms.map((room) => (
        <Card key={room.id}>
          <CardImage urlImg={room.img} />
          <CardContent>
            <div className={classes.title}>{room.title}</div>
            <Rating title={'РЕЙТИНГ'} numStars={room.rating} />
            <div className={classes.text}>{room.description}</div>
            <div className={classes.icons}>
              {room.options.map((item) => (
                <Icons key={item.id} {...item} />
              ))}
            </div>
          </CardContent>
          <div className={classes.select}>
            <a href="/">
              <span>ПОДРОБНЕЕ</span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </a>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default RoomsContent
