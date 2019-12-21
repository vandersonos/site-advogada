import React from 'react';
class CardTopico extends React.Component{
    render(){
        let paragrafo = <div class="col s12 m8 l8 xl6 offset-xl1 card-content"><p class="intro-pessoal" >{this.props.texto}</p></div>;
        let imagem = <div class="col s6 offset-s3 m4  l4 xl4 card-image"><img src={this.props.img} alt="" class="responsive-img" /></div>;
        return (
            <div class="col s12 m12 l12 xl12 card-topico" >
                <div id={this.props.id} class="section scrollspy">
                    <h4  class="header">{this.props.titulo}</h4>
                    <div class="card hoverable lighten-5 z-depth-1">            
                        { this.props.alinhamento === 'left' &&
                            <div class="row">
                            {imagem}
                            {paragrafo}
                            </div>
                        }
                         { this.props.alinhamento !== 'left' &&
                            <div class="row">
                            {paragrafo}
                            {imagem}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default CardTopico