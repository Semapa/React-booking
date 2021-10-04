import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom'
import MainLayout from './layouts/main'
import LoginLayout from './layouts/login'
import NotFound from './containers/NotFound/NotFound'
import Login from './containers/Login/Login'
import Registration from './containers/Registration/Registration'
import PropTypes from 'prop-types'

const pages = [
  // {
  //   exact: true,
  //   path: '/',
  //   component: NotFound,
  //   layout: LoginLayout
  // },
  {
    exact: false,
    path: '/login',
    component: Login,
    layout: LoginLayout
  },
  {
    exact: false,
    path: '/registration',
    component: Registration,
    layout: LoginLayout
  },
  {
    exact: false,
    path: '/rooms/:roomId?',
    component: Registration,
    layout: MainLayout
  },
  {
    exact: false,
    path: '/404',
    component: NotFound,
    layout: MainLayout
  }
]

function App() {
  const history = useHistory()

  return (
    <Router history={history}>
      <Switch>
        {pages.map((page, index) => (
          <Route
            key={index}
            exact={page.exact}
            path={page.path}
            render={(props) => (
              <page.layout history={props.history}>
                <page.component {...props} />
              </page.layout>
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
