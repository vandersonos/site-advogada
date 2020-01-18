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
    enviarMensagemEmail(){
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
                            <form class="col s12 m6 form-contato">
                                    <div class="col s12">
                                        <h5 class="valign-wrapper">Contato</h5>
                                    </div>
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
                                </form>
                            <div class="form-contato-acoes col s12 m6">
                                <div class="col s12">
                                    <h6 class="valign-wrapper">Escolha abaixo a melhor forma de me contatar</h6>
                                </div>
                                <div class="input-field col s12">
                                    <div class='row'>
                                        <div class='col'><img src='img/whatsapp.png'/></div>
                                        <div class='col'>
                                            <button class="btn waves-effect waves-light" onClick={(e) => this.enviarMensagemWhatsapp(e)}>
                                                Enviar whatsapp<i class="material-icons right hide-on-small-only">send</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <div class='col'>
                                            <img src='img/email.png'/>
                                        </div>
                                        <div class='col'>
                                            <button class="btn waves-effect waves-light" onClick={(e) => this.enviarMensagemEmail(e)}>
                                                Enviar email<i class="material-icons right hide-on-small-only">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 form-title-pagina-facebook">
                                    <h6 class="valign-wrapper">Ou acesse minha página no facebook</h6>
                                </div>
                                <div class="col s12">
                                    <div class='row'>
                                        <div class='col'>   
                                            <a target='_blank' href='https://www.facebook.com/taianemartinscosta/'>
                                            <img src='img/facebook.png'/>
                                            </a>
                                        
                                        </div>
                                        <div class='col'>
                                            <a target='_blank' href='https://www.facebook.com/taianemartinscosta/'>
                                            <button class="btn waves-effect waves-light" >
                                                    Acessar página<i class="material-icons right  hide-on-small-only"></i>
                                                </button>
                                            </a>
                                        </div>
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
