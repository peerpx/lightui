import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Bootstrap-theme.css';
import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <Footer />
      </div>
    );
  }
}

export default App;
