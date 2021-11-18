import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom'
import PropTypes from 'prop-types'
import routes from './routes'

function App() {
  const history = useHistory()

  return (
    <Router history={history}>
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
    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object
}
export default App
