import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {    super(props)  }

    render() {
        return (
            <div className="sidebar col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <FontAwesome className="far fa-home" size="5x"/>
                <FontAwesome className="far fa-star" />
            </div>
        )  
    }
}

export default Sidebar;