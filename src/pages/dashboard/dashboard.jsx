import React from 'react'
import { Switch, Route } from 'react-router-dom'
import api from '../../api/index'
import classes from './dashboard.css'
import Sidebar from '../../components/ui/sidebar/sidebar'
import RoomsStatus from '../../components/ui/roomsStatus/roomsStatus'
import ReservedRooms from '../../components/ui/reservedRooms/reservedRooms'
import RoomsManager from '../../components/ui/roomsManager/roomsManager'
import config from '../../config.json'

// для отладки
const rooms = api.rooms.fetchAll()

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Switch>
        {config.isAdmin ? (
          <>
            <Sidebar />
            <Route
              exact
              path="/dashboard/"
              render={() => <RoomsStatus rooms={rooms} />}
            />
            <Route
              exact
              path="/dashboard/manager"
              render={() => <RoomsManager rooms={rooms} />}
            />
          </>
        ) : (
          <Route
            exact
            path="/dashboard/"
            render={() => <ReservedRooms rooms={rooms} />}
          />
        )}
      </Switch>
    </div>
  )
}

export default Dashboard
