import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import routes from './routes'
import { useDispatch } from 'react-redux'
import { loadOptionsList } from './store/options'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadOptionsList())
  }, [])

  return (
    <div>
      <Switch>
        {routes.map((rout, index) => (
          <Route
            key={index}
            exact={rout.exact}
            path={rout.path}
            render={(props) => (
              <rout.layout history={props.history}>
                <rout.component {...props} />
              </rout.layout>
            )}
          />
        ))}
        <Redirect exact from="/" to="/rooms" />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

App.propTypes = {
  history: PropTypes.object
}
export default App
