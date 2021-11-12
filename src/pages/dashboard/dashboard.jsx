import React from 'react'
import RoomsStatus from '../../components/ui/roomsStatus/roomsStatus'
import ReservedRooms from '../../components/ui/reservedRooms/reservedRooms'
import Sidebar from '../../components/ui/sidebar/sidebar'
import api from '../../api/index'
import classes from './dashboard.css'
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
