import React from 'react';
class CardCartaoVisita extends React.Component{
    render(){
        return (
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div id={this.props.id} class="section scrollspy">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">

                            <div class="col s8">
                                <h3>Teste de titulo</h3>
                                <br/>
                                <span class="black-text">
                                    This is a square image. Add the "circle" class to it to make it appear circular.
                                </span>
                            </div>
                            <div class="col s4">
                                <img src="https://lorempixel.com/100/190/nature/6" alt="" class="circle responsive-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardCartaoVisita