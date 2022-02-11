import { useState, useEffect } from 'react'
import roomsService from '../services/rooms.service'
import { validator } from '../utils/validator'

const useForm = (initialState = {}, validatorConfig, onSubmit) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (form.email !== '') validate()
  }, [form])

  const validate = () => {
    const errors = validator(form, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleChange = ({ target }) => {
    setForm((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    // onSubmit?.(form)
    console.log('form', form)
    console.log('e', e)

    // if (e.target.dataset === 'add-number') {
    console.log('111')
    try {
      const data = await roomsService.create(form)
      console.log('data', data)
    } catch (error) {
      console.log(error)
    }
    // }
  }

  return { handleChange, handleSubmit, form, isValid, errors }
}

export default useForm
