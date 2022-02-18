import React from 'react'
import { Link } from 'react-router-dom'
import classes from './header.css'
import logoImg from '../../../assets/img/logo.png'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../../store/users'

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn())

  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logoImg} alt="" />
          <div>S U M M E R &nbsp;&nbsp;H O T E L</div>
        </div>
      </Link>
      <div className={classes.nav}>
        {isLoggedIn ? (
          <p>Logged</p>
        ) : (
          <>
            {' '}
            <Link to="/login">Войти</Link>
            <span>&nbsp;/&nbsp;</span>
            <Link to="/registration">Регистрация</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
