import React from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import Navbar from './compontentes/NavBar.js';
import Contato from './compontentes/Contato.js';


function App() {
    let artigos = [
        {
            titulo:'Divórcio',
            id:'divorcio',
            img:'img/divorcio.jpg',
            texto:"Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região."
        },
        {
            id:'guarda',
            titulo:'Guarda',
            img:'img/guarda.jpg',
            texto:"Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região."
        },
        {
            id:'pensao',
            titulo:'Pensão',
            img:'img/pensao-alimenticia.jpg',
            texto:"Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região."
        },
        {
            id:'adocao',
            titulo:'Adoção',
            img:'img/adocao.jpg',
            texto:"Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região."
        }
    ];
    let itens = [];
     for (const [index, value] of artigos.entries()) {
        itens.push(<CardTopico id={value.id} alinhamento='left' titulo={value.titulo} texto={value.texto} img={value.img}/>);
    }
    return (
    <div className="App ">
        <Navbar artigos={artigos}/>
        <div class='container row'>
            <CardCartaoVisita id='sobre' />
            {itens}
            <Contato id='contato'/>
        </div>
    </div>
  );
}

export default App;
