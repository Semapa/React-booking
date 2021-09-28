import React from 'react'
import api from '../../api/index'
import Rooms from '../../components/Rooms/Rooms'
import '../../fontawesome'

const rooms = api.rooms.fetchAll()

const AllRooms = () => {
  return (
    <>
      <Rooms
        headerTitle={'ДОСТУПНЫЕ НОМЕРА'}
        headerContent={
          'Наш отель предлагает комфортабельные номера на любой вкус'
        }
        rooms={rooms}
      />
    </>
  )
}

export default AllRooms