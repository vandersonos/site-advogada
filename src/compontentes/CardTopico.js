import React from 'react';
class CardTopico extends React.Component{
    render(){
        let itens = [];
        for (const [index, value] of this.props.itens.entries()) {
            itens.push(<li class='collection-item'>{value}</li>);
        }
        let paragrafo = <div class="col s6 m7 l7 xl6 offset-xl1 "><h4  class="header">{this.props.titulo}</h4><ul class='collection'>{itens}</ul></div>;
        let imagem = <div class="col s6 offset-s3 m5 l5 xl4 card-image"><img src={this.props.img} alt="" class="responsive-img" /></div>;
        return (
            <div class="col s12 m12 l12 xl12 card-topico" >
                <div id={this.props.id} class="section scrollspy">
                    
                    <div class="card hoverable grey lighten-5 z-depth-1">            
                        { this.props.alinhamento === 'left' &&
                            <div class="row card-topico-conteudo">
                            {imagem}
                            {paragrafo}
                            </div>
                        }
                         { this.props.alinhamento !== 'left' &&
                            <div class="row card-topico-conteudo">
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