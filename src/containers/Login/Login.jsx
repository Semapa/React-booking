import React from 'react'
import classes from './Login.css'
import Button from '../../components/UI/Button/Button'

const Login = () => {
  const handleClick = () => {
    console.log('Login Click')
  }
  return (
    <section className={classes.login}>
      <div className={classes.formGroup}>
        <h1>Вход</h1>
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
            Войти
          </Button>
          <div className={classes.formButtonLink}>
            <a href="#"> Зарегистрироваться</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
