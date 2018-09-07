import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bootstrap-theme.css';
import './App.css';
import Header from './components/Header';
import MainTodo from './components/MainTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainTodo />
      </div>
    );
  }
}

export default App;
