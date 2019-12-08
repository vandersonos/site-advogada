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
        <div class='container row'>
        
            <CardCartaoVisita id='sobre' />
            <CardTopico id='m1' alinhamento='left' titulo='Divórcio'/>
            <CardTopico id='m2' alinhamento='right' titulo='Guarda' />
            <CardTopico id='m3' alinhamento='left' titulo='Penssão' />
            <CardTopico id='m4' alinhamento='right' titulo='Adocão' />
            <Contato id='contato'/>
        </div>
    </div>
  );
}

export default App;
