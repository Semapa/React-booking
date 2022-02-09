import React from 'react'
import Header from '../components/ui/header/header'
import Footer from '../components/ui/footer/footer'
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
