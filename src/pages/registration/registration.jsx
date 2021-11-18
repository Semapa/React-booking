import React from 'react'
import classes from './registration.css'
import { Link } from 'react-router-dom'
import Button from '../../components/common/button/button'
import TextField from '../../components/common/form/textField/textField'

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
    min: {
      message: 'Пароль должен состоять минимум из 8 символов',
      value: 8
    }
  }
}

const Registration = () => {
  const { form, handleSubmit, handleChange, errors, isValid } = useForm(
    { email: '', password: '' },
    validatorConfig
  )

  return (
    <section className={classes.registration}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
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

        <div className={classes.button}>
          <Button typeButton={'primary'} type="submit" disabled={!isValid}>
            Войти
          </Button>
          <div className={classes.link}>
            <Link to="/login">Войти</Link>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Registration
