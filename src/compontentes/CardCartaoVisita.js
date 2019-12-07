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
                    <div class="card-panel hoverable  lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 m3">
                                <img src="https://lorempixel.com/150/150/nature/6" alt="" class="circle responsive-img" />
                            </div>
                            <div class="col s12 m9">
                                <h4>Taiane Martins Costa</h4>
                                <p class="black-text intro-pessoal" >
                                    Advogada atuante na área de direito de família. Trabalha prestando assessoramento jurídico e serviço de correspondência em Pelotas e região.
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