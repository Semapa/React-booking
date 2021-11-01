import React from 'react'
import RoomsStatus from '../../ui/roomsStatus/roomsStatus'
import api from '../../../api/index'
import Sidebar from '../../ui/sidebar/sidebar'
import classes from './dashboard.css'
import ReservedRooms from '../../ui/reservedRooms/reservedRooms'
// для отладки
const rooms = api.rooms.fetchAll()
const isAdmin = false

const Dashboard = () => {
  return (
    <div className={classes.container}>
      {isAdmin ? (
        <>
          <Sidebar />
          <RoomsStatus rooms={rooms} />
        </>
      ) : (
        <ReservedRooms rooms={rooms} />
      )}
    </div>
  )
}

export default Dashboard
