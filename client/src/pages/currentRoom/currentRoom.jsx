import React from 'react'
import PropTypes from 'prop-types'
import Rating from '../../components/ui/rating/rating'
import Icons from '../../components/ui/rooms/icons/icons'
import Separartor from '../../components/ui/separator/separartor'
import Button from '../../components/common/button/button'
import classes from './currentRoom.css'
import '../../fontawesome'

// --------- для отладки ------------
// import api from '../../api/index'

// const rooms = api.rooms.fetchAll()
// ----------------------------------

const CurrentRoom = ({ rooms, id }) => {
  const currentRoom = rooms.find((room) => String(room._id) === id)

  const handleClick = () => {
    console.log('CurrentRoom - button click')
  }
  return (
    <section className={classes.container}>
      <div className={classes.headerImg}>
        <img src={currentRoom.img} alt="" />
      </div>

      <div className={classes.description}>
        <div className={classes.descriptionHeader}>
          <h2>{currentRoom.title}</h2>
          <Rating title={'РЕЙТИНГ'} numStars={currentRoom.rating} />
        </div>
        <Separartor />
        <div className={classes.descriptionTitle}>
          <p>{currentRoom.descriptionFull}</p>
        </div>
        <Separartor />
      </div>
      <div className={classes.options}>
        {currentRoom &&
          currentRoom.options.map((option) => {
            return (
              <div key={option._id} className={classes.optionsItem}>
                <div className={classes.optionsIcon}>
                  <Icons icon={option.icon} />
                </div>
                <div className={classes.optionDescription}>{option.name}</div>
              </div>
            )
          })}
      </div>
      <Separartor />
      <div className={classes.button}>
        {/* <button>Забронировать</button> */}
        <Button typeButton={'reserve'} onClick={() => handleClick()}>
          Забронировать
        </Button>
      </div>
    </section>
  )
}

CurrentRoom.propTypes = {
  rooms: PropTypes.array,
  id: PropTypes.string
}

export default CurrentRoom
