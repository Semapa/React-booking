import React from 'react'
import classes from './Rooms.css'
import RoomsHeader from './RoomsHeader/RoomsHeader'
import RoomsContent from './RoomsContent/RoomsContent'

const Rooms = () => {
  return (
    <section className={classes.rooms}>
      <RoomsHeader />
      <RoomsContent />
    </section>
  )
}

export default Rooms
