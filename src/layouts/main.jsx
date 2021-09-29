import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AllRooms from '../containers/AllRooms/AllRooms'

const MainLayout = () => {
  return (
    <>
      <Header />
      <AllRooms />
      <Footer />
    </>
  )
}

export default MainLayout
