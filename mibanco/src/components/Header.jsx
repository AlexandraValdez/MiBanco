/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logotipo from '../img/logotipo.png';
import banner from '../img/banner.png'; 
import './Header.css'; 

const Header = () => {
  return (
    <div id='container' className="header-container" >
    <div><img src={banner} alt="Banner" className="header-banner" /></div>
    <div className='barra'><Navbar bg="#FFFFFF" variant="light" expand="lg">
      <Navbar.Brand href="#">
        <img alt="Logo"  src={logotipo} width="250" height="160" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Button variant="primary" id='btn1' style={{ color: '#FFFFFF', width: '150px', height: '40px' }}>Banco</Button>
        <Button variant="primary" id='btn2' style={{ color: '#FAB500', width: '150px', height: '40px' }}>Ahorra</Button>
      </Nav>
      <Navbar.Toggle aria-controls="navbar-menu" />
      <Navbar.Collapse id="navbar-menu">
        <Nav>
          <Nav.Link href="#">Contactanos</Nav.Link>
          <Nav.Link href="#">Pide tu prestamo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  </div>
 
  );
}


export default Header;
