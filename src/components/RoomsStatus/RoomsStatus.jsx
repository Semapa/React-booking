import React from 'react'
import PropTypes from 'prop-types'
import Card from '../ui/card/card'
import CardImage from '../ui/card/cardImage/cardImage'
import CardContent from '../ui/card/cardContent/cardContent'
import classes from './roomsStatus.css'

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
