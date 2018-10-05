// todo hamburger

import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

// Header
class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/"><span className="peerpx-head">Peer</span><span className="align-top peerpx-tail">px</span></NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/">About</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login">Log in</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button tag={Link} to="/signin" color="primary">Sign up</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}
export default Header;
