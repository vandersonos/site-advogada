import React from 'react';
class Contato extends React.Component{
    render(){
        return (
            <div class="col ">
                <div id={this.props.id} class="section scrollspy">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">

                        <div class="col">
                            <h3>Contato</h3>
                            <br/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Contato