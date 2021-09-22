import React from 'react'
import classes from './Header.css'
import logoImg from '../../assets/img/logo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logoImg} alt="" />
        <div>
          <a href="/">S U M M E R &nbsp;&nbsp;H O T E L</a>
        </div>
      </div>
      <a href="/">Войти / Регистрация</a>
    </div>
  )
}

export default Header
