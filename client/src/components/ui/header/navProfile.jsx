import React, { useState } from 'react'
import classes from './header.css'
import { Link } from 'react-router-dom'
import { getCurrentUserData } from '../../../store/users'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavProfile = () => {
  const [isOpen, setOpen] = useState(false)
  const currentUser = useSelector(getCurrentUserData())
  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }
  const dropdownMenu =
    classes.dropdownMenu + ' ' + (isOpen ? classes.showMenu : '')

  if (!currentUser) return <p>Loading</p>
  return (
    <div className={classes.dropdown}>
      <div className={classes.profile}>
        <img src={currentUser.image} alt="" height="40" />
        <div onClick={toggleMenu}>
          <span>{currentUser.name}</span>
          <FontAwesomeIcon icon={['fa', 'angle-down']} />
        </div>
      </div>
      <div className={dropdownMenu}>
        <Link to={`/`} className="">
          Profile
        </Link>
        <Link to="/logout" className="">
          Log Out
        </Link>
      </div>
    </div>
  )
}

export default NavProfile
