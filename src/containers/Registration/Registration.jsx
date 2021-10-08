import React from 'react'
import classes from './Registration.css'
import Button from '../../components/UI/Button/Button'

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
          <Button type={'registration'} onClick={() => handleClick()}>
            Регистрация
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Registration
