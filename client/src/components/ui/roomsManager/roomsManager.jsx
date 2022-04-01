import React from 'react'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import classes from './roomsManager.css'
import Card, { CardImage, CardContent } from '../card'
import { Button } from '../../common/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button } from '../../components/common/button'
import { TextField } from '../../common/form'

const RoomsManager = ({ rooms }) => {
  const history = useHistory()
  const handleAdd = () => {
    history.push('/dashboard/add-room')
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>Search</div>
      <div className={classes.rooms}>
        <div className={classes.search}>
          <TextField
            placeholder="Search"
            name="email"
            // value={form.email}
            // onChange={handleChange}
            // error={errors.email}
          />
        </div>
        {rooms.map((room) => (
          <Card key={room.id} options={['horizontal']}>
            <CardImage urlImg={room.img} alt="room foto" />
            <CardContent>
              <div>
                <div className={classes.controls}>
                  <Button typeButton={'close'}>
                    <FontAwesomeIcon icon={['fa', 'times']} />
                  </Button>
                </div>
                <h4 className={classes.title}>{room.title}</h4>
                <p className={classes.text}>{room.description}</p>
              </div>

              <div className={classes.controls}>
                <Button typeButton={'edit'}>РЕДАКТИРОВАТЬ</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className={classes.create}>
        <Button typeButton={'primary'} onClick={handleAdd}>
          Добавить номер
        </Button>
      </div>
    </div>
  )
}

RoomsManager.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default RoomsManager
