import React from 'react';
import $ from 'jquery';

class Contato extends React.Component{
    enviarMensagemWhatsapp(e){
        this.validaForm();
        const contatoNumber = encodeURIComponent('5553981119605');
        let nome = encodeURIComponent($('#nome').val());
        let telefone = encodeURIComponent($('#telefone').val());
        let msg = `Nome: ${nome}`;
        msg += ` Telefone: ${telefone}, `;
        msg +=  encodeURIComponent($('#mensagem').val()); //this.document.getElementById('icon_mensagem').value;
        let target = `https://api.whatsapp.com/send?phone=${contatoNumber}&text=${msg}`;
        window.open(target);
        
    }
    enviarMensagemMessenger(){
        window.open('https://www.messenger.com/t/taianemartinscosta');
    }
    validaForm(){
        if($('#nome').val() === ''){
            alert('erro')
        }
        if($('#telefone').val() === ''){
            alert('erro')
        }

        if($('#mensagem').val() === ''){
            alert('erro')
        }
    }

    render(){
        return (
            <div class="col">
                <div id={this.props.id} class="section scrollspy">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 "><h5>Contato</h5></div>
                            <div class="col s12 ">
                                <form class="col s12 m6">
                                    <div class="row">
                                        <div class="input-field col s12"><i class="material-icons prefix">account_circle</i>
                                            <input id="nome" type="text" class="validate"/>
                                            <label for="nome">Nome</label>
                                        </div>
                                        <div class="input-field col s12"><i class="material-icons prefix">phone</i>
                                            <input id="telefone" type="tel" class="validate"/>
                                            <label for="telefone">Telefone</label>
                                        </div>
                                        <div class="input-field col s12"><i class="material-icons prefix">question_answer</i>
                                            <textarea id="mensagem" class="materialize-textarea"></textarea>
                                            <label for="mensagem">Mensagem</label>
                                        </div>
                                    </div>
                                </form>
                            <div class="col s12 m6">
                                <div class="col s12">
                                    <h5 class="valign-wrapper">Escolha abaixo a melhor forma de me contatar</h5>
                                </div>
                                <div class="input-field col s12">
                                    <button class="btn waves-effect waves-light" onClick={(e) => this.enviarMensagemWhatsapp(e)}>
                                        Enviar via whatsapp<i class="material-icons right">send</i>
                                    </button>
                                </div>
                                <div class="input-field col s12">
                                    <button class="btn waves-effect waves-light" type="button" >Enviar via facebook mensenger<i class="material-icons right">send</i></button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contato
