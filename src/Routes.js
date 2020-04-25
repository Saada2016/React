import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const CustomRoutes = () => {
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route  path="/Work" component={Work}/>
            <Route path="/Contact" component={Contact}/>
        </div>
    </Router>
}
