import React from 'react';
import M from "materialize-css";
import $ from 'jquery';

class Navbar extends React.Component{
    componentDidMount() {
        M.AutoInit();
    }
    escondeMenu(){
        $(".sidenav-overlay").trigger("click");
    return false; 
    }
    render(){
        let itens = [];
        for (const [index, value] of this.props.artigos.entries()) {
            let url = '#'+value.id;
            itens.push(<li><a onClick={this.escondeMenu} href={url}>{value.titulo}</a></li>);
        }


        return (
            <div >
                <nav>
                    <div class="nav-wrapper container">
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="left hide-on-med-and-down ">
                            <li><a onClick={this.escondeMenu} href="#sobre">Sobre</a></li>
                            <li><a onClick={this.escondeMenu} href="#contato">Contato</a></li>
                            {itens}
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav section table-of-contents" id="mobile-demo">
                    {itens}
                    <li><a onClick={this.escondeMenu} href="#sobre">Sobre</a></li>
                    <li><a onClick={this.escondeMenu} href="#contato">Contato</a></li>
                </ul>
            </div>
        )
       
    }
}
export default Navbar