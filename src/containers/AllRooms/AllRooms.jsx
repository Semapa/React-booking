import React from 'react'
import { useParams } from 'react-router'
import api from '../../api/index'
import Rooms from '../../components/Rooms/Rooms'
import CurrentRoom from '../../containers/CurrentRoom/CurrentRoom'
import '../../fontawesome'

const rooms = api.rooms.fetchAll()

const AllRooms = () => {
  const { roomId } = useParams()
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
