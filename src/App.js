import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from './containers/Home'
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
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App