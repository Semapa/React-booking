import { useState, useEffect } from 'react'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log('form', form)
    onSubmit?.(form)
  }

  return { handleChange, handleSubmit, form, isValid, errors }
}

export default useForm
