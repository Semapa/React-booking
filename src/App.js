import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LayoutMain from './layouts/main'
import LayoutLogin from './layouts/login'

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={LayoutLogin} />
        <Route path="/registration" component={LayoutLogin} />
        <Route path="/" component={LayoutMain} />
      </Switch>
    </>
  )
}

export default App
