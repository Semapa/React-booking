import React from 'react'
import classes from './Header.css'
import WAVE from '../../../assets/img/wave-yellow.png'

const header = () => {
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

export default header
