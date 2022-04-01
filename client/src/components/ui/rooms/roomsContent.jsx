import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import classes from './rooms.css'
// import api from '../../../api/index'
import Card, { CardImage, CardContent } from '../card'
import Rating from '../rating/rating'
import Icons from './icons/icons'
import { Link } from 'react-router-dom'

// const rooms = api.rooms.fetchAll()

const RoomsContent = ({ rooms }) => {
  return (
    <div className={classes.wrapper}>
      {rooms.map((room) => (
        <Card key={room.id} options={['vertical', 'hover']}>
          <CardImage urlImg={room.img} alt="room foto" />
          <CardContent>
            <div className={classes.title}>{room.title}</div>
            <Rating title={'РЕЙТИНГ'} numStars={room.rating} />
            <div className={classes.text}>{room.description}</div>
            <div className={classes.icons}>
              {room?.options.map((item) => (
                <Icons key={item.id} {...item} />
              ))}
            </div>
          </CardContent>
          <div className={classes.select}>
            <Link to={`/rooms/${room.id}`}>
              <span>ПОДРОБНЕЕ</span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}

RoomsContent.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default RoomsContent
