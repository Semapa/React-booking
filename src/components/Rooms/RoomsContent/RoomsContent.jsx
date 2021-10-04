import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import classes from './RoomsContent.css'
// import api from '../../../api/index'
import Card from '../../UI/Card/Card'
import CardImage from '../../UI/Card/CardImage/CardImage'
import CardContent from '../../UI/Card/CardContent/CardContent'
import Rating from '../../UI/Rating/Rating'
import Icons from './Icons/Icons'
import { Link } from 'react-router-dom'

// const rooms = api.rooms.fetchAll()

const RoomsContent = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.rooms.map((room) => (
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
