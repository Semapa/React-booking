import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.object
}

export default MainLayout
