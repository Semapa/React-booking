import React from 'react'
import PropTypes from 'prop-types'
import classes from './roomsManager.css'
import Card, { CardImage, CardContent } from '../card'
import { Button } from '../../common/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button } from '../../components/common/button'
// import { TextField } from '../../components/common/form'

const RoomsManager = ({ rooms }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.search}>Search</div>
      <div className={classes.rooms}>
        {rooms.map((room) => (
          <Card key={room.id} options={['horizontal']}>
            <CardImage urlImg={room.img} alt="room foto" />
            <CardContent>
              <p className={classes.title}>{room.title}</p>
              <div className={classes.text}>{room.description}</div>
              <div className={classes.controls}>
                <Button typeButton={'edit'}>
                  <FontAwesomeIcon icon={['far', 'edit']} />
                </Button>
                <Button typeButton={'delete'}>
                  <FontAwesomeIcon icon={['far', 'trash-alt']} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

RoomsManager.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default RoomsManager
