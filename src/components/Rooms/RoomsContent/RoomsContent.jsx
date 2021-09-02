import React from 'react'
import classes from './RoomsContent.css'
import api from '../../../api/index'
import Card from '../../UI/Card/Card'

const rooms = api.rooms.fetchAll()

const roomsContent = () => {
  return (
    <div className={classes.wrapper}>
      {rooms.map((room) => (
        <Card key={room.id} {...room} />
      ))}
    </div>
  )
}

export default roomsContent
