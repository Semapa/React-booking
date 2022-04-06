import React from 'react'
import { useHistory } from 'react-router'
import { removeRoom } from '../../../store/rooms'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import classes from './roomsManager.css'
import Card, { CardImage, CardContent } from '../card'
import { Button } from '../../common/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button } from '../../components/common/button'
import { TextField } from '../../common/form'
// import roomsService from '../../../services/rooms.service'

const RoomsManager = ({ rooms }) => {
  console.log('RoomsManager', rooms)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleAdd = () => {
    history.push('/dashboard/add-room')
  }

  const handleDelete = (roomId) => {
    try {
      dispatch(removeRoom(roomId))
    } catch (error) {
      console.error('RoomsManager error', error)
    }
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
        {rooms ? (
          rooms.map((room) => (
            <Card key={room._id} options={['horizontal']}>
              <CardImage urlImg={room.img} alt="room foto" />
              <CardContent>
                <div>
                  <div className={classes.controls}>
                    <Button
                      typeButton={'close'}
                      onClick={() => handleDelete(room._id)}
                      id={room._id}>
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
          ))
        ) : (
          <h3>Нет доступных номеров</h3>
        )}
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
