import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// import AllRooms from './containers/AllRooms/AllRooms'
import CurrentRoom from './containers/CurrentRoom/CurrentRoom'

function App() {
  return (
    <>
      <Header />
      {/* <AllRooms /> */}
      <CurrentRoom />
      <Footer />
    </>
  )
}

export default App
