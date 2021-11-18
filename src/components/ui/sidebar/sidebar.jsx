import React from 'react'
import classes from './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.wrapper}>
        <Link to="/dashboard/">Статус номеров</Link>
        <Link to="/dashboard/manager">Менеджер номеров</Link>
      </div>
    </div>
  )
}

export default Sidebar
