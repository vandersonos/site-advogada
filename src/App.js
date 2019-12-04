import React from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import Navbar from './compontentes/NavBar.js';
import Contato from './compontentes/Contato.js';


function App() {
  return (
    <div className="App ">
        <Navbar/>
        <div class='container'>
        
            <CardCartaoVisita id='sobre' />
            <CardTopico id='m1' alinhamento='left' />
            <CardTopico id='m2' alinhamento='right' />
            <CardTopico id='m3' alinhamento='left' />
            <CardTopico id='m4' alinhamento='right' />
            <Contato id='contato'/>
        </div>
    </div>
  );
}

export default App;
