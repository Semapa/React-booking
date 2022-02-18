import React from 'react'
import classes from './login.css'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/button'
import { TextField } from '../../components/common/form'
import { useSelector } from 'react-redux'
import { getAuthErrors } from '../../store/users'

import useForm from '../../hooks/useForm'

const validatorConfig = {
  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения'
    },
    isEmail: {
      message: 'Email введен не корректно'
    }
  },
  password: {
    isRequired: {
      message: 'Пароль обязателен для заполнения'
    },
    isCapitalSymbol: {
      message: 'Пароль должен содержать хотя бы одну заглавную букву'
    },
    isContainDigit: {
      message: 'Пароль должен содержать хотя бы одну цифру'
    },
    isContainЫpecialСharacter: {
      message: 'Пароль должен содержать один из специальных символов !@#$%^&*'
    },
    min: {
      message: 'Пароль должен состоять минимум из 8 символов',
      value: 8
    }
  }
}

const formConfig = { email: '', password: '' }

const Login = () => {
  const { form, handleSubmit, handleChange, errors, isValid } = useForm(
    formConfig,
    validatorConfig
  )

  const loginError = useSelector(getAuthErrors())

  return (
    <section className={classes.login}>
      <form className={classes.form} onSubmit={handleSubmit} data-type="login">
        <h1>Вход</h1>
        <TextField
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        {loginError && <p className={classes.error}>{loginError}</p>}
        <div className={classes.button}>
          <Button typeButton={'primary'} type="submit" disabled={!isValid}>
            Войти
          </Button>
          <div className={classes.link}>
            <Link to="/registration">Зарегистрироваться</Link>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login
