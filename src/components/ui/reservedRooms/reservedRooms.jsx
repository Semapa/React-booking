import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import Card, { CardImage, CardContent } from '../card'
import classes from './reservedRooms.css'
import Button from '../../common/button/button'

const ReservedRooms = ({ rooms }) => {
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`/rooms/${id}`)
  }
  return (
    <div className={classes.wrapper}>
      {rooms.map((room) => (
        <Card key={room.id} closeButton={true}>
          <CardImage urlImg={room.img} alt="room foto" />
          <CardContent>
            <p className={classes.title}>{room.title}</p>
            <p>Номер комнаты: &nbsp; {room.roomNumber}</p>
            <div className={classes.button}>
              <Button
                typeButton={'primary'}
                onClick={() => {
                  handleClick(room.id)
                }}>
                Открыть
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

ReservedRooms.propTypes = {
  rooms: PropTypes.array.isRequired
}
export default ReservedRooms
