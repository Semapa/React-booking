import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AllRooms from '../containers/AllRooms/AllRooms'

const LayoutMain = () => {
  return (
    <>
      <Header />
      <AllRooms />
      <Footer />
    </>
  )
}

export default LayoutMain
