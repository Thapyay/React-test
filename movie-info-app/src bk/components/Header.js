import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './Header.css';

class Header extends Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render() {
        return (
            <div className="searchbar">
                <div className="searchbar-content">
                    <FontAwesome className="fa-search" name="search" size="2x" />
                    <input
                        type="text"
                        className="searchbar-input"
                        placeholder="Search"
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )  
    }
}

export default Header;