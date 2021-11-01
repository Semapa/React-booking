import React from 'react'
import classes from './registration.css'
import Button from '../../common/button/button'

const Registration = () => {
  const handleClick = () => {
    console.log('Registration Click')
  }
  return (
    <section className={classes.registration}>
      <div className={classes.formGroup}>
        <h1>Регистрация</h1>
        <input
          type="text"
          placeholder="Login"
          className={classes.formControl}
        />
        <input
          type="text"
          placeholder="Password"
          className={classes.formControl}
        />
        <div className={classes.formButton}>
          <Button typeButton={'primary'} onClick={() => handleClick()}>
            Регистрация
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Registration
