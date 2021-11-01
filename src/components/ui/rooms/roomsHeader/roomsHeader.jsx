import React from 'react'
import PropTypes from 'prop-types'
import classes from './roomsHeader.css'
import WAVE from '../../../../assets/img/wave-yellow.png'

const Header = (props) => {
  return (
    <>
      {Object.keys(props).length && (
        <div className={classes.header}>
          {props.headerTitle ? (
            <div className={classes.headerTitle}>{props.headerTitle}</div>
          ) : null}
          {props.headerContent ? (
            <div className={classes.headerContent}>{props.headerContent} </div>
          ) : null}
          <img className={classes.headerImg} src={WAVE} alt="" />
        </div>
      )}
    </>
  )
}

Header.propTypes = {
  headerTitle: PropTypes.string,
  headerContent: PropTypes.string
}

export default Header
