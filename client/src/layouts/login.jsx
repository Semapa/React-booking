import React from 'react'
import Header from '../components/ui/header/header'
import PropTypes from 'prop-types'

const LoginLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.object
}

export default LoginLayout
