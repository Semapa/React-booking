import { React } from 'react'
import classes from './login.css'
import { Link } from 'react-router-dom'
import Button from '../../components/common/button/button'
import TextField from '../../components/common/form/textField/textField'
import FormComponent from '../../components/common/form/form/form'

const Login = () => {
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

  const handleSubmit = (e) => {
    console.log('login handleSubmit')
  }

  return (
    <section className={classes.login}>
      <FormComponent
        onSubmit={handleSubmit}
        validatorConfig={validatorConfig}
        formClassName={classes.form}>
        <h1>Вход</h1>
        <TextField placeholder="Email" name="email" />
        <TextField placeholder="Password" type="password" name="password" />

        {/* <div className={classes.button}> */}
        <Button typeButton={'primary'} type="submit">
          Войти
        </Button>
        <div className={classes.link}>
          <Link to="/registration">Зарегистрироваться</Link>
        </div>
        {/* </div> */}
      </FormComponent>
    </section>
  )
}

export default Login
