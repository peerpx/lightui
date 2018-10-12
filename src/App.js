import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './containers/Home'
import SigIn from './containers/Signin'
import Login from './containers/Login'
import Logout from './containers/Logout'

import NotFound from './containers/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Bootstrap-theme.css';
import './App.css';

library.add(fab, fas)


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SigIn} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <ProtectedRoute path='/dashboard' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App