import React from 'react'
import classes from './RoomsHeader.css'
import WAVE from '../../../assets/img/wave-yellow.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerTitle}>ДОСТУПНЫЕ НОМЕРА</div>
      <div className={classes.headerContent}>
        Наш отель предлагает комфортабельные номера на любой вкус
      </div>
      <img className={classes.headerImg} src={WAVE} alt="" />
    </div>
  )
}

export default Header
