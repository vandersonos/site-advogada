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

        return (
            <div >
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#m1">slide 1</a></li>
                    <li><a href="#m2">slide 2</a></li>
                    <li><a href="#m2">slide 3</a></li>
                    <li class="divider"></li>
                    <li><a href="#m4">slide 4</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <nav>
                    <div class="nav-wrapper container">
                        <a href="#!" class="brand-logo right">
                            <i class="material-icons">cloud</i>
                            Logo
                        </a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="left hide-on-med-and-down ">
                            <li>
                                <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                                Menu <i class="material-icons right">arrow_drop_down</i>
                                </a>
                            </li>
                            <li><a href="#m2"><i class="material-icons">view_module</i></a></li>
                            <li><a href="#m3"><i class="material-icons">refresh</i></a></li>
                            <li><a href="#m4"><i class="material-icons">more_vert</i></a></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav section table-of-contents" id="mobile-demo">
                    <li><a onClick={this.escondeMenu} href="#sobre">Sobre</a></li>
                    <li><a onClick={this.escondeMenu} href="#m1">slide 1</a></li>
                    <li><a onClick={this.escondeMenu} href="#m2">slide 2</a></li>
                    <li><a onClick={this.escondeMenu} href="#m3">slide 3</a></li>
                    <li><a onClick={this.escondeMenu} href="#m4">slide 4</a></li>
                    <li><a onClick={this.escondeMenu} href="#contato">Contato</a></li>
                </ul>
            </div>
        )
       
    }
}
export default Navbar