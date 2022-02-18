import React from 'react'
import classes from './registration.css'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/button'
import { TextField } from '../../components/common/form'
// import { toast } from 'react-toastify'

import useForm from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { getAuthErrors } from '../../store/users'

const validatorConfig = {
  name: {
    isRequired: {
      message: 'Имя обязательно для заполнения'
    },
    min: {
      message: 'Имя должно состоять минимум из 3 символов',
      value: 3
    }
  },
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

const Registration = () => {
  const { form, handleSubmit, handleChange, errors, isValid } = useForm(
    formConfig,
    validatorConfig
  )

  const authError = useSelector(getAuthErrors())

  // useEffect(() => {
  //   toast.error('dfdfg', {
  //     position: toast.POSITION.TOP_RIGHT
  //   })
  // }, [authError])

  return (
    <section className={classes.registration}>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        data-type="registration">
        <h1>Регистрация</h1>
        <TextField
          placeholder="Имя"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          placeholder="Пароль"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        {authError && <p className={classes.error}>{authError}</p>}
        <div className={classes.button}>
          <Button typeButton={'primary'} type="submit" disabled={!isValid}>
            Регистрация
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
