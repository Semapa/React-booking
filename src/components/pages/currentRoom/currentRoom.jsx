import React from 'react'
import PropTypes from 'prop-types'
import Rating from '../../ui/rating/rating'
import Icons from '../../ui/rooms/roomsContent/icons/icons'
import Separartor from '../../ui/separator/separartor'
import Button from '../../common/button/button'
import '../../../fontawesome'
import classes from './currentRoom.css'

// --------- для отладки ------------
// import api from '../../api/index'

// const rooms = api.rooms.fetchAll()
// ----------------------------------

const CurrentRoom = ({ rooms, id }) => {
  const currentRoom = rooms.find((room) => String(room.id) === id)

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
          <p>
            Эксклюзивный курортный спа-отель Atrium Prestige Thalasso & Villas
            находится вблизи мыса Прасониси, в потрясающем месте на морском
            побережье. <br />
            К услугам гостей пейзажный бассейн, рестораны национальной кухни,
            Wi-Fi на всей территории, а также номера с видом на море или
            окружающую местность. В просторных номерах курортного спа-отеля
            Atrium Prestige Thalasso & Villas потолки расписаны вручную. В
            ванной комнате установлены панорамные окна, из которых открывается
            прекрасный вид, а над гидромассажной ванной светильники создают
            иллюзию звездного неба. Все номера оснащены телевизором с
            32-дюймовым плоским экраном и спутниковыми каналами. Из спа-центра
            AnaNeosis Thalasso открывается восхитительный вид на Средиземное
            море. <br />
            Здесь гости могут записаться на стрижку, маникюр, профессиональный
            макияж, процедуры талассотерапии, а также посетить сауну и хаммам.
            На территории курортного спа-отеля Atrium Prestige работает
            несколько ресторанов, в том числе греческий ресторан, ресторан
            Prestigio, где подают традиционные блюда итальянской кухни,
            азиатский ресторан на берегу моря и ресторан изысканной кухни
            Thalassa с обслуживанием по меню. По прибытии всем гостям дарят
            приветственную корзину с местным вином и свежими фруктами. Дети
            смогут провести время на игровой площадке или на поле для
            мини-гольфа. В это время взрослые могут поплавать в бассейне или
            позаниматься в фитнес-центре. Курортный спа-отель Atrium Prestige
            расположен всего в 18 км от мыса Прасониси, гостям предоставляется
            бесплатный трансфер в обе стороны. На территории обустроена
            бесплатная парковка.
          </p>
        </div>
        <Separartor />
      </div>
      <div className={classes.options}>
        {currentRoom.options.map((option) => {
          return (
            <div key={option.id} className={classes.optionsItem}>
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
