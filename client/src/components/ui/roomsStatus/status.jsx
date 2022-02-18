import React from 'react'
import PropTypes from 'prop-types'
import classes from './roomsStatus.css'

const Status = ({ reservation }) => {
  return (
    <p>
      Статус: &nbsp;
      <span className={reservation ? classes.reserved : classes.free}>
        {reservation ? `Занят` : `Свободен`}{' '}
      </span>
    </p>
  )
}

Status.propTypes = {
  reservation: PropTypes.bool.isRequired
}
export default Status
