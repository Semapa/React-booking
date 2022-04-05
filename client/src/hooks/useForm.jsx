import { useState, useEffect } from 'react'
// import roomsService from '../services/rooms.service'
import { createRoom } from '../store/rooms'
import { validator } from '../utils/validator'
import { useDispatch } from 'react-redux'
import { signUp, login } from '../store/users'
import { useHistory } from 'react-router-dom'

const useForm = (initialState = {}, validatorConfig, onSubmit) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (form.email !== '') validate()
    // console.log('useForm useEffect', form)
  }, [form])

  const redirect = history.location.state
    ? history.location.state.from.pathname
    : '/'

  const validate = () => {
    const errors = validator(form, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleChange = ({ target }) => {
    setForm((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleChangeMultySelect = (optionsList) => {
    setForm((prevState) => ({
      ...prevState,
      [optionsList.name]: optionsList.value // Данные от multySelectField приходят в optionsList.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    // onSubmit?.(form)
    // console.log('form handleSubmit', form)
    // console.log('e', e)

    switch (e.target.dataset.type) {
      case 'registration':
        dispatch(signUp(form))
        break
      case 'login':
        dispatch(login({ payload: form, redirect }))
        break
      case 'add-room':
        try {
          // преобразовать данные из multySelectField
          const formData = {
            ...form,
            roomNumber: Number(form.roomNumber),
            options: form.options.map((option) => ({
              name: option.label,
              icon: option.icon,
              _id: option.value
            }))
          }
          dispatch(createRoom(formData))
          // await roomsService.create(formData)
          history.push('/dashboard/manager')
        } catch (error) {
          console.log(error)
        }
        break

      default:
        break
    }
  }

  return {
    handleChange,
    handleChangeMultySelect,
    handleSubmit,
    form,
    isValid,
    errors
  }
}

export default useForm
