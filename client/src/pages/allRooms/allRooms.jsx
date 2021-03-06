import React from 'react'
import { useParams } from 'react-router'
// import api from '../../api/index'
import Rooms from '../../components/ui/rooms/rooms'
import CurrentRoom from '../currentRoom/currentRoom'
import '../../fontawesome'
import { useSelector } from 'react-redux'
import { getRoomsList } from '../../store/rooms'

// const roomsApi = api.rooms.fetchAll()

const AllRooms = () => {
  const { roomId } = useParams()
  const rooms = useSelector(getRoomsList())
  // console.log('roomsApi', roomsApi)
  // console.log('rooms', rooms)

  return (
    <>
      {roomId ? (
        <CurrentRoom rooms={rooms} id={roomId} />
      ) : (
        <Rooms
          headerTitle={'ДОСТУПНЫЕ НОМЕРА'}
          headerContent={
            'Наш отель предлагает комфортабельные номера на любой вкус'
          }
          rooms={rooms}
        />
      )}
    </>
  )
}

export default AllRooms
