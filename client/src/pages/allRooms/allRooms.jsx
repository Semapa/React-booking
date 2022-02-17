import React from 'react'
import { useParams } from 'react-router'
import api from '../../api/index'
import Rooms from '../../components/ui/rooms/rooms'
import CurrentRoom from '../currentRoom/currentRoom'
import '../../fontawesome'
// import optionsService from '../../services/options.service'
// import axios from 'axios'
const rooms = api.rooms.fetchAll()

const AllRooms = () => {
  const { roomId } = useParams()

  // useEffect(async () => {
  //   const date = await optionsService.get()
  //   console.log('optionsService.get()', date)
  // }, [])

  // useEffect(async () => {
  //   await axios
  //     .get('http://localhost:8080/api/options')
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

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
