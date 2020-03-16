import React from 'react';
import {Route,Link,HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";


function Header(){
    return(     
        <HashRouter>
            <div>
            
                <div className="pos-f-t">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                        <h5 className="text-white h4">Collapsed content</h5>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"  data-target=".nav-collapse"aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Work">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div className="main">
            <h1> AL Programmer</h1>
                <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route  path="/Work" component={Work}/>
                <Route path="/Contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>

           
        
    )
}

export default Header;