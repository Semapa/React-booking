import React from 'react'
import RoomsStatus from '../../components/ui/roomsStatus/roomsStatus'
import api from '../../api/index'
import Sidebar from '../../components/ui/sidebar/sidebar'
import classes from './dashboard.css'
import ReservedRooms from '../../components/ui/reservedRooms/reservedRooms'
// для отладки
const rooms = api.rooms.fetchAll()
const isAdmin = true

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
