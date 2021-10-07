import React from 'react'
import classes from './Login.css'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'
// import TextField from '../../components/UI/TextField/TextField'

const Login = () => {
  const handleClick = () => {
    console.log('Login Click')
  }
  return (
    <section className={classes.login}>
      <form className={classes.formGroup}>
        <h1>Вход</h1>
        {/* <TextField placeholder="Login" /> */}
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
            <Link to="/registration">Зарегистрироваться</Link>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login
