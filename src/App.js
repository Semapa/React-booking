import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LayoutMain from './layouts/main'
import LayoutLogin from './layouts/login'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={LayoutLogin} />
        <Route path="/registration" component={LayoutLogin} />
        <Route path="/" component={LayoutMain} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
