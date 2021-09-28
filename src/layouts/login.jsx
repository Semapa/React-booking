import React from 'react'
import Registration from '../containers/Registration/Registration'
import Login from '../containers/Login/Login'
import { useLocation } from 'react-router'

const LayoutLogin = () => {
  const { pathname } = useLocation()
  return <>{pathname === '/login' ? <Login /> : <Registration />}</>
}

export default LayoutLogin
