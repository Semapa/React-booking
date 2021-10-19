import React from 'react'
import RoomsStatus from '../../components/roomsStatus/roomsStatus'
import api from '../../api/index'
// для отладки
const rooms = api.rooms.fetchAll()

const Dashboard = () => {
  return <RoomsStatus rooms={rooms} />
}

export default Dashboard
