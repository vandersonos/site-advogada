import React from 'react';
class Contato extends React.Component{
    render(){
        return (
            <div class="col ">
                <div id={this.props.id} class="section scrollspy">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 "><h5>Contato</h5></div>
                            <div class="col s12 ">
                                <form class="col s12 m6">
                                <div class="row">
                                    <div class="input-field col s12"><i class="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" class="validate">
                                        <label for="icon_prefix">Nome</label>
                                    </div>
                                    <div class="input-field col s12"><i class="material-icons prefix">phone</i>
                                        <input id="icon_telephone" type="tel" class="validate">
                                        <label for="icon_telephone">Telefone</label>
                                    </div>
                                    <div class="input-field col s12"><i class="material-icons prefix">question_answer</i>
                                        <textarea id="icon_mensagem" class="materialize-textarea"></textarea>
                                        <label for="icon_mensagem">Mensagem</label>
                                    </div>
                                </div>
                                </form>
                            <div class="col s12 m6">
                                <div class="col s12">
                                    <h5 class="valign-wrapper">Escolha abaixo a melhor forma de me contatar</h5>
                                </div>
                                <div class="input-field col s12">
                                    <button class="btn waves-effect waves-light" type="submit" name="action">Enviar via whatsapp<i class="material-icons right">send</i></button>
                                </div>
                                <div class="input-field col s12">
                                    <button class="btn waves-effect waves-light" type="submit" name="action">Enviar via facebook mensenger<i class="material-icons right">send</i></button>
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
