import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardImage, CardContent } from '../card'
import classes from './roomsStatus.css'
import Status from './status'

const RoomsStatus = ({ rooms }) => {
  return (
    <div className={classes.wrapper}>
      {rooms.map((room) => (
        <Card key={room.id}>
          <CardImage urlImg={room.img} alt="room foto" />
          <CardContent>
            <p className={classes.title}>{room.title}</p>
            <p>Номер комнаты: &nbsp; {room.roomNumber}</p>
            <Status reservation={room.reservation} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

RoomsStatus.propTypes = {
  rooms: PropTypes.array.isRequired
}
export default RoomsStatus
