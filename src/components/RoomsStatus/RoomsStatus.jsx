import React from 'react'
import PropTypes from 'prop-types'
import Card from '../UI/Card/Card'
import CardImage from '../UI/Card/CardImage/CardImage'
import CardContent from '../UI/Card/CardContent/CardContent'
import classes from './RoomsStatus.css'

const RoomsStatus = ({ rooms }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}></div>
      <div className={classes.wrapper}>
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardImage urlImg={room.img} alt="room foto" />
            <CardContent>
              <p>{room.title}</p>
              <p>Номер комнаты: &nbsp; {room.roomNumber}</p>
              <p>Статус: &nbsp; {room.reservation ? `Свободен` : `Занят`}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

RoomsStatus.propTypes = {
  rooms: PropTypes.array.isRequired
}
export default RoomsStatus
