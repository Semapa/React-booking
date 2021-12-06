import React from 'react'
import classes from './addRoom.css'
import useForm from '../../../hooks/useForm'
import { TextField, MultiSelectField } from '../../common/form'
import { Button } from '../../common/button'

const validatorConfig = {
  title: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  description: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  descriptionFull: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  roomNumber: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  area: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  img: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  price: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  }
}
const formConfig = {
  title: '',
  description: '',
  descriptionFull: '',
  roomNumber: '',
  area: '',
  img: '',
  price: ''
}

const AddRoom = () => {
  const { form, handleSubmit, handleChange, errors, isValid } = useForm(
    formConfig,
    validatorConfig
  )

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Название номера"
          name="title"
          value={form.title}
          onChange={handleChange}
          error={errors.title}
        />
        <TextField
          label="Краткое описание номера"
          name="description"
          value={form.description}
          onChange={handleChange}
          error={errors.description}
        />
        <TextField
          label="Полное описание номера"
          name="descriptionFull"
          value={form.descriptionFull}
          onChange={handleChange}
          error={errors.descriptionFull}
        />
        <TextField
          label="Номер комнаты"
          name="roomNumber"
          value={form.roomNumber}
          onChange={handleChange}
          error={errors.roomNumber}
        />
        <TextField
          label="Площадь номера"
          name="area"
          value={form.area}
          onChange={handleChange}
          error={errors.area}
        />
        <TextField
          label="Ссылка на фото номера"
          name="img"
          value={form.img}
          onChange={handleChange}
          error={errors.img}
        />

        <TextField
          label="Стоимость номера"
          name="price"
          value={form.price}
          onChange={handleChange}
          error={errors.price}
        />

        <MultiSelectField
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]}
          onChange={handleChange}
          name="options"
          label="Выберите опции"
          defaultValue={[{ value: 'vanilla', label: 'Vanilla' }]}
        />

        <div className={classes.button}>
          <Button typeButton={'primary'} type="submit" disabled={!isValid}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddRoom
