import React, {Component} from 'react';
import SearchField from "react-search-field";

import './Header.css';
import { Nav,Navbar, NavItem} from 'react-bootstrap';

class Header extends Component {
    
    render() {
        return (
            <div className="Header">
                <div className="HeaderTitle">All Movies</div>
                <SearchField
                    placeholder="Search..."
                    classNames="SearchBar"
                />
                <Navbar bg="none" expand="lg">
                    <Nav className="mx-auto">
                        <NavItem href="/" className="HeaderMenuItem">POPULAR</NavItem>
                        <Nav.Link href="/">TOP RATED</Nav.Link>
                        <Nav.Link href="/">UPCOMING</Nav.Link>
                        <Nav.Link href="/">NOW PLAYING</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )  
    }
}

export default Header;