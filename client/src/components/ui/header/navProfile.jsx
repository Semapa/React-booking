import React from 'react'
import { getCurrentUserData } from '../../../store/users'
import { useSelector } from 'react-redux'

const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData())
  if (!currentUser) return <p>Loading</p>

  return (
    <div>
      {' '}
      <img src={currentUser.image} alt="" height="40" className="" />
    </div>
  )
}

export default NavProfile
