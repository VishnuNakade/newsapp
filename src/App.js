import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';



export default function App() {
  return (
    <div>

      <NavBar/>

      <LoadingBar
      color='#f11946'
      progress={100}
      
    />
      <News/>
    </div>
  )
}



