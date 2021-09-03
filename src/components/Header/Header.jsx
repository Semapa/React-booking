import React from 'react'
import classes from './Header.css'

const Header = () => {
  console.log(classes)
  return (
    <div className={classes.header}>
      <a href="/">Войти / Регистрация</a>
    </div>
  )
}

export default Header
