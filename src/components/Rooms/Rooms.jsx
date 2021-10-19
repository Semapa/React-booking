import React from 'react'
import PropTypes from 'prop-types'
import classes from './rooms.css'
import RoomsHeader from './roomsHeader/roomsHeader'
import RoomsContent from './roomsContent/roomsContent'

const Rooms = ({ rooms, ...rest }) => {
  return (
    <section className={classes.rooms}>
      <RoomsHeader {...rest} />
      <RoomsContent rooms={rooms} />
    </section>
  )
}

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired
}
export default Rooms
