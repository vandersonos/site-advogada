import React from 'react';
class CardTopico extends React.Component{
    render(){
        if(this.props.alinhamento == 'left'){
            return (
            <div class="col s12 m6 l6">
                <div id={this.props.id} class="section scrollspy">
                    <h4  class="header hide-on-med-and-down show-on-large-only">{this.props.titulo}</h4>
                    <div class="card hoverable lighten-5 z-depth-1">
                        
                        <div class="row">
                            <div class="col s6 offset-s3 m6 offset-m3 l6 offset-l3 xl4 card-image">
                                <h4  class="header show-on-medium hide-on-large-only">{this.props.titulo}</h4>
                                <img src="https://lorempixel.com/150/150/nature/6" alt="" class="responsive-img" />
                            </div>
                            <div class="col s12 m12 l12 xl8 card-content">
                                <p class="intro-pessoal" >
                                    Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região.
                                </p>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }else{
            return (
                <div class="col s12 m6 l6">
                    <div id={this.props.id} class="section scrollspy">
                    <h4  class="header hide-on-med-and-down  show-on-large-and-up">{this.props.titulo}</h4>
                        <div class="card hoverable lighten-5 z-depth-1">
                            
                            <div class="row">
                                <div class="col s12 m12 l12 xl8 card-content">
                                    <p class="intro-pessoal" >
                                        Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região.
                                    </p>                              
                                </div>
                                <div class="col s6 offset-s3 m6 offset-m3 l6 offset-l3 xl4 card-image">
                                    <h4  class="header show-on-medium hide-on-large-only">{this.props.titulo}</h4>
                                    <img src="https://lorempixel.com/150/150/nature/6" alt="" class="responsive-img" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
export default CardTopico