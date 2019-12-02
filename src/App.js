import React from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import Navbar from './compontentes/NavBar.js';

function App() {
  return (
    <div className="App ">
        <Navbar/>
        <div class='container'>
        
            <CardCartaoVisita />
            <CardTopico id='m1' alinhamento='left' />
            <CardTopico id='m2' alinhamento='right' />
            <CardTopico alinhamento='left' />
            <CardTopico id='m4' alinhamento='right' />
        </div>
    </div>
  );
}

export default App;
