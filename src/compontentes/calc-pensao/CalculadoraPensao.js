import React from 'react';
import M from "materialize-css";
import $ from 'jquery';
import CustosIndividuais from './CustosIndividuais.js';

class CalculadoraPensao extends React.Component{
    componentDidMount() {
        M.AutoInit();
    }
    render(){
        return (
            <div >
                <CustosIndividuais/>
   
            </div>
        )
       
    }
}
export default CalculadoraPensao