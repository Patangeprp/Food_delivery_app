import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/Header';
import React from 'react';
import { Route,Routes,Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/service' element={<Service/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
