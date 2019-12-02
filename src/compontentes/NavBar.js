import React from 'react';
import M from "materialize-css";
class Navbar extends React.Component{
    componentDidMount() {
        // Auto initialize all the things!
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
         //M.AutoInit();
    }
    render(){

        return (
            <div >
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="#m1">one</a></li>
                    <li><a href="#m2">two</a></li>
                    <li class="divider"></li>
                    <li><a href="#m4">three</a></li>
                </ul>
                <nav>
                    <div class="nav-wrapper container">
                        <a href="#!" class="brand-logo right"><i class="material-icons">cloud</i>Logo</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="left hide-on-med-and-down">
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Menu<i class="material-icons right">arrow_drop_down</i></a></li>
    
                            <li><a href="#m2"><i class="material-icons">view_module</i></a></li>
                            <li><a href="#m3"><i class="material-icons">refresh</i></a></li>
                            <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="#m1">Sass</a></li>
                    <li><a href="#m2">Components</a></li>
                    <li><a href="#m3">Javascript</a></li>
                    <li><a href="#m4">Mobile</a></li>
                </ul>
            </div>
        )
       
    }
}
export default Navbar