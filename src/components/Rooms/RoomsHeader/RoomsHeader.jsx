import React from 'react'
import PropTypes from 'prop-types'
import classes from './RoomsHeader.css'
import WAVE from '../../../assets/img/wave-yellow.png'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerTitle}>{props.headerTitle}</div>
      <div className={classes.headerContent}>{props.headerContent} </div>
      <img className={classes.headerImg} src={WAVE} alt="" />
    </div>
  )
}

Header.propTypes = {
  headerTitle: PropTypes.string,
  headerContent: PropTypes.string
}

export default Header
