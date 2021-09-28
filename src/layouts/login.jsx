import React from 'react'
import Registration from '../containers/Registration/Registration'
import Login from '../containers/Login/Login'
import { useLocation } from 'react-router'
import Header from '../components/Header/Header'

const LayoutLogin = () => {
  const { pathname } = useLocation()
  return (
    <>
      <Header />
      {pathname === '/login' ? <Login /> : <Registration />}
    </>
  )
}

export default LayoutLogin
