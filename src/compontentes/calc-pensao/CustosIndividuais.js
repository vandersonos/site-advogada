import React from 'react';
import M from "materialize-css";
import $ from 'jquery';
import CustosIndividuais from './CustosIndividuais.js';

class CalculadoraPensao extends React.Component{
    componentDidMount() {
        this.nrItens = 0
        M.AutoInit();
    }
    rmItem(e){
        console.log(e, 'e')

    }

    addItem(){
        let id = new Date().getTime()
        let item = $('#item-despesa').val();
        let valor = $('#item-valor').val();
        $('#table-custos-individuais').append('<tr id="'+id+'"><td>'+item+'</td><td>'+valor+'</td><td><a class="btn-floating btn-small waves-effect waves-light red" onClick="'+this.rmItem(id)+'"><i class="material-icons">remove</i></a></td></tr>')
    }
    render(){
        return (
            <div >
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="" id="item-despesa" type="text" class="validate"/>
                        <label for="item-despesa">Descricão</label>
                    </div>
                    <div class="input-field col s4">
                        <input id="item-valor" type="text" class="validate"/>
                        <label for="item-valor">Valor</label>
                       
                    </div>
                    <div class="input-field col s2">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.addItem} ><i class="material-icons">add</i></a>
                    </div>
                </div>
                <div class='row'>
                   <table class='highlight'>
                        <thead>
                        <tr>
                            <th>Item</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody id='table-custos-individuais'>
                        </tbody>
                    </table>
                </div>
            </div>
        )
       
    }
}
export default CalculadoraPensao