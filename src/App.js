import React from 'react'
import api from './api/index'
import Header from './components/Header/Header'
import Rooms from './components/Rooms/Rooms'
import './fontawesome'

const rooms = api.rooms.fetchAll()

function App() {
  return (
    <>
      <Header />
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

export default App
