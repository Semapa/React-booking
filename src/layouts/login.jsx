import React from 'react'
import Header from '../components/header/header'
import PropTypes from 'prop-types'

const LayoutLogin = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

LayoutLogin.propTypes = {
  children: PropTypes.object
}

export default LayoutLogin
