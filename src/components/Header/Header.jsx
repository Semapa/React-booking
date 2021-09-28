import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.css'
import logoImg from '../../assets/img/logo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logoImg} alt="" />
        <div>
          <Link to="/">S U M M E R &nbsp;&nbsp;H O T E L</Link>
        </div>
      </div>
      <div className={classes.nav}>
        <Link to="/login">Войти</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link to="/registration">Регистрация</Link>
      </div>
    </div>
  )
}

export default Header
