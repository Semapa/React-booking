import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import routes from './routes'
import AppLoader from './components/ui/hoc/appLoader'

function App() {
  return (
    <div>
      <AppLoader>
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
      </AppLoader>
    </div>
  )
}

App.propTypes = {
  history: PropTypes.object
}
export default App
