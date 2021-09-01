import React from 'react'
import classes from './Header.css'

const header = () => {
  console.log(classes)
  return (
    <div className={classes.Header}>
      <a href="/">Войти/Регистрация</a>
    </div>
  )
}

export default header
