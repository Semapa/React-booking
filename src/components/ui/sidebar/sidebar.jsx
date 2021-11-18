import React from 'react'
import classes from './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.wrapper}>
        <Link to="/dashboard/room-status">Статус номеров</Link>
        <Link to="/dashboard/room-manager">Менеджер номеров</Link>
      </div>
    </div>
  )
}

export default Sidebar
