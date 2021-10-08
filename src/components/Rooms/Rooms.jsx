import React from 'react'
import PropTypes from 'prop-types'
import classes from './Rooms.css'
import RoomsHeader from './RoomsHeader/RoomsHeader'
import RoomsContent from './RoomsContent/RoomsContent'

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
