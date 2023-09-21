import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  
  render() {
    return (
      <div>
       <LoadingBar
        color='#f11946'
        progress={10}
        
      />
        <NavBar/>
        <News/>
      </div>
    )
  }
}


