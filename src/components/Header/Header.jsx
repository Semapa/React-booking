import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.css'
import logoImg from '../../assets/img/logo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logoImg} alt="" />
          <div>S U M M E R &nbsp;&nbsp;H O T E L</div>
        </div>
      </Link>
      <div className={classes.nav}>
        <Link to="/login">Войти</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link to="/registration">Регистрация</Link>
      </div>
    </div>
  )
}

export default Header
