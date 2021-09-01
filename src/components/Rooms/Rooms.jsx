import React from 'react'
import classes from './Rooms.css'
import RoomsHeader from './RoomsHeader/RoomsHeader'
import RoomsContent from './RoomsContent/RoomsContent'

const rooms = () => {
  return (
    <div className={classes.Rooms}>
      <RoomsHeader />
      <RoomsContent />
    </div>
  )
}

export default rooms
