import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {MovieListContainer} from './index';

import './Sidebar.css';

export default class Sidebar extends Component {

    render() {
        return (
            <Router>
            <div className="Sidebar">
                <Link to={'/'}><span className="glyphicon glyphicon-menu-hamburger MenuIcon"></span></Link>
                <Link to={'/WashList'}><span className="glyphicon glyphicon glyphicon-star-empty MenuIcon"></span></Link>
            </div>

            <Route exact path = '/' component = {MovieListContainer} />
            {/* <Route path='/WashList' component={MovieListContainer} /> */}
            </Router>
        )  
    }
}