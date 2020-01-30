import React from 'react';
const divStyle = {
  color: 'blue',
    'text-align': 'justify',
}
class CardCartaoVisita extends React.Component{
    
    render(){
        return (
            <div class="col s12 m12 l12 ">
                <div id={this.props.id} class="section scrollspy">
                    <div class="card-panel hoverable  lighten-5 z-depth-1 cartaoVisita">
                        <div class="row">
                            <div class="col s12 m4 fotoCartao">
                                <img src="img/taiane_perfil.jpeg" alt="" class="circle responsive-img" />
                            </div>
                            <div class="col s12 m8 textoCartao">
                                <span class="nome">Taiane Martins Costa</span>
                                <p class="black-text intro-pessoal" >
                                    Advogada Especialista em Direito Civel, que atua na área de Direito de Família. <br/>
                                    Trabalha prestando suporte jurídico e serviço de correspondência em Pelotas e região.
                                </p>
                            </div>
         
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardCartaoVisita