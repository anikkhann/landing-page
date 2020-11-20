import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo1.png';
import './Header.css';

const Header = () => {
    return (

        <div>
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="#home" style={{ marginLeft: '140px' }}>

                    <img style={{ width: '50px' }}
                        src={logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >

                <Nav className="header" >
                    <Link to='/home'> <Nav.Link style={{ marginLeft: '750px', color: 'white' }} href="#home">Home</Nav.Link> </Link>
                    <Link to='/preview'> <Nav.Link style={{ marginLeft: '50px', color: 'white' }} href="#donation">Preview</Nav.Link> </Link>
                   
                </Nav>

            </Navbar>

        </div>


    );
};

export default Header;